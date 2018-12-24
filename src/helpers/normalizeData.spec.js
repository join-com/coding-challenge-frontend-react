import { createCollectionFromArray } from "./normalizeData";

describe("createCollectionFromArray test", () => {
  it("should convert array to collection", () => {
    const testArray = [
      {
        id: 1,
        name: "name"
      },
      {
        id: 2,
        name: "name2"
      }
    ];
    const expectedCollection = {
      1: {
        id: 1,
        name: "name"
      },
      2: {
        id: 2,
        name: "name2"
      }
    };
    expect(createCollectionFromArray(testArray)).toEqual(expectedCollection);
  });
});
