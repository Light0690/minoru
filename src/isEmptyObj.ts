export const isEmptyObj = (obj: Object) => {
  if (typeof obj !== "object") {
    throw new Error("invalid params");
  }

  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
};
