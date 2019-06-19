import { FormatUTCDate } from "./Formatters";

it("FormatUTCDate should format date correctly", () => {
   // Arrange
   const olderstUTC = 0;
   const nowUTC = new Date().toUTCString();
   // Act
   const formattedOldestDate = FormatUTCDate(olderstUTC);
   const formattedNow = FormatUTCDate(parseInt(nowUTC));
   // Assert
   expect(formattedOldestDate).toBe("Thu Jan 01 1970");
   expect(new Date(formattedNow).toUTCString()).toBe(formattedNow);
});
