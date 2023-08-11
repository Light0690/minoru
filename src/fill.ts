/**
 *
 * @param arr - любой массив
 * @param element - любой элемент
 * @returns - arr -  новый массив с заменой всех элементов на - element
 */

export const fill = (arr: any[], element: any) => {
  if (!Array.isArray(arr)) {
    throw new Error("invalid params");
  }

  const res = arr.map((el) => (el = element));
  return res; 
};
