/**
 * Функция принимает обьект и возвращает ответ, пустой он или нет
 *
 * @param { obj | Array } obj любой обьект или массив
 * @returns { boolean } ответ, пустой ли обьект
 */

export const isEmptyObj = (obj: Object): boolean => {
  if (typeof obj !== "object" || obj === null || obj === undefined) {
    throw new Error("invalid params");
  }

  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
};
