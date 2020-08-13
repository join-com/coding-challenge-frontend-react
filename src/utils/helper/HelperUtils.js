module.exports = {
  getPageCount: (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  },
  message: {
    Error: "Oops, Something went wrong!!",
    Empty: "No results found!!",
    FieldEmpty: "Oops, fields are empty!",
  },
};
