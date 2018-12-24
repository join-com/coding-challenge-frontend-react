import { createPrefix, createAction } from "./actionHelpers";

describe("createAction test", () => {
  it("should create correct type constant and action", () => {
    const prefix = createPrefix("INCIDENTS");
    const FETCH = prefix("FETCH");
    const payload = 1;
    const type = "SB/INCIDENTS/FETCH";
    expect(FETCH).toEqual(type);
    expect(createAction(FETCH)(payload)).toEqual({ payload, type });
  });
});
