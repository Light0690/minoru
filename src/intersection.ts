/**
 * Функция совмещает два массива в один, оставляя значения, которые есть в обоих массивах
 *
 * @param { any[] } arr1 любой массив
 * @param { any[] } arr2 любой массив
 * @returns { any[] } новый массив из пересекающихся элементов обоих массивов
 */

export const intersection = (arr1: any[], arr2: any[]): any[] => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("invalid params");
  }

  const maxLength = arr1.length >= arr2.length ? arr1.length : arr2.length;
  const res = []; 

  for (let i = 0; i < maxLength; i++) {
    if (arr1.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }

  return res;
};
