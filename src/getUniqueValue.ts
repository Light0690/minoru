/**
 * Функция оставляет в массиве только уникальные значения
 *
 * @param { any[] } arr любой массив
 * @returns { any[] } новый массив, состоящий из уникальных значений
 */

export const getUniqueValue = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) {
    throw new Error("invalid params");
  }

  return [...new Set(arr)];
};
