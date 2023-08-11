/**
 * 
 * @param obj - любой обьект 
 * @returns - boolean - ответ, пустой ли обьект
 */

export const isEmptyObj = (obj: Object) => {
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
