/**
 * Функция замеяет все элемента массива на новые, переданные в параметр - element
 *
 * @param { any[] } arr  любой массив
 * @param { any[] } element  любой элемент
 * @returns { any[] } новый массив с заменой всех элементов на - element
 */

export const fill = (arr: any[], element: any): any[] => {
  if (!Array.isArray(arr)) {
    throw new Error("invalid params");
  }

  const res = arr.map((el) => (el = element));
  return res; 
};
