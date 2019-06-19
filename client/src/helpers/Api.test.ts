import mockAxios from "jest-mock-axios";
import { HttpResponse } from "jest-mock-axios/dist/lib/mock-axios-types";
import { fetchAllCases } from "./Api";

it("FetchAllCases should return correct data", async () => {
  const doFetch = fetchAllCases();
  const response: HttpResponse = {
    data: {
        incidents: [
        {
          id: 102152,
          title: "Post to Neighbors",
          description: "wondering if all the birch trees",
          address: "801 Van White Memorial Blvd Minneapolis, MN 55411, USA",
          occurred_at: 1560614519,
          updated_at: 1560620028,
          url: "https://bikewise.org/api/v1/incidents/102152",
          source: {
            name: "SeeClickFix.com",
            html_url: "https://seeclickfix.com/issues/6034466",
            api_url: "https://seeclickfix.com/api/v2/issues/6034466",
          },
        }],
    },
    status: 200,
  };
  mockAxios.mockResponse(response);
  const result = await doFetch;
  expect(result).toMatchSnapshot();
});
