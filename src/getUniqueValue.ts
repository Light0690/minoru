/**
 * 
 * @param arr - любой массив
 * @returns - arr - новый массив, состоящий из уникальных значений
 */

export const getUniqueValue = (arr: any[]) => {
  if (!Array.isArray(arr)) {
    throw new Error("invalid params");
  }

  return [...new Set(arr)];
};
