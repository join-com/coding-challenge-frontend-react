import formatTimeStampToDate from "./formatDate";

describe("formatTimeStampToDate test", () => {
  it("should create date from timestamp", () => {
    expect(formatTimeStampToDate(1410760800)).toEqual("Mo., 15. Sept. 2014");
    expect(formatTimeStampToDate(1210260300)).toEqual("Do., 8. Mai 2008");
  });
});
