export const isUniqueValue = (arr: any[]) => {
  if (!Array.isArray(arr) || arr === null || arr === undefined) {
    throw new Error("invalid params");
  }

  const res = arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));

  return res;
};
