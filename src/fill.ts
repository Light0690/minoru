export const fill = (arr: any[], element: any) => {
  if (!Array.isArray(arr)) {
    throw new Error("invalid params");
  }

  const res = arr.map((el) => (el = element));
  return res;
};
