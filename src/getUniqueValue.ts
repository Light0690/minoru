export const getUniqueValue = (arr: any[]) => {
  if (!Array.isArray(arr)) {
    throw new Error("invalid params");
  }

  return [...new Set(arr)];
};
