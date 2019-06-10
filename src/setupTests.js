// for more strict error checking
console.error = message => {
  const err = new Error(message);

  throw err;
};
