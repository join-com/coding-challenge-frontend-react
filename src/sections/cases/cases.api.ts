import { ICaseData, ICasesData } from './cases';

const apiData: ICaseData[] = [];
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

export const createAPIRequest = (query: string, page: number, pageSize: number) => (): Promise<ICasesData> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data: ICasesData = {
        list: [],
        total: apiData.length,
      };

      const start = (page - 1) * pageSize;
      data.list = apiData.slice(start, start + pageSize);

      resolve(data);
    }, 500);
  });
};
