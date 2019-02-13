import { ApolloServer, gql } from 'apollo-server-lambda';
import axios from 'axios';
import { ICaseData } from '../sections/cases/cases';

const typeDefs = gql`
  type Case {
    id: ID
    image: String
    title: String
    description: String
    content: String
  }

  type CasesResult {
    list: [Case]
    total: Int
  }

  type Query {
    getCases(query: String, page: Int, pageSize: Int): CasesResult
  }
`;

interface ICasesResult {
  total: number;
  list: ICaseData[];
}

const apiData: any = [];
for (let i = 0; i < 7; i++) {
  apiData.push({
    content:
      'Stolen from the bike rack in front of the Library. \r\nSecurity footage from the library shows that the theif was a light skinned man about 5\'6" to 5\'8" in height wearing all black and a black cap.',
    description: '1066 Cambridge St Cambridge 02139, United States',
    id: i,
    image: 'https://files.bikeindex.org/uploads/Pu/145892/large_3A11DDE3-E049-49D6-B15D-D34FBA7A0D29.jpeg',
    title: `Abandoned Bicycle ${i}`,
  });
}

const getCases = async (
  _: any,
  { query, page, pageSize }: { query: string; page: number; pageSize: number },
): Promise<ICasesResult> => {
  const response = await axios.get(
    `https://bikewise.org:443/api/v2/incidents?query=${query}&page=${page}&per_page=${pageSize}&incident_type=theft&proximity=berlin&proximity_square=25`,
  );

  if (!response.status) {
    throw new Error('HTTP error, status = ' + response.status);
  }
  const total = response.headers.total;

  const list: ICaseData[] = response.data.incidents.map(
    ({ id, title, description, address, occurred_at, media }: any) => {
      const date = new Date();
      date.setTime(occurred_at * 1000);

      return {
        content: `${date.toDateString()} - ${address}`,
        description,
        id,
        image: media.image_url_thumb,
        title,
      };
    },
  );

  return { total, list };
};

const resolvers = {
  Query: {
    getCases,
  },
};

const server = new ApolloServer({
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
});

exports.handler = server.createHandler();
