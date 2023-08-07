import { isEmptyObj } from "../lib/minoru.js";

export const checkIsEmptyObj = () => {
  const res = isEmptyObj({ a: 1, b: 2 });

  if (res) throw new Error("isEmptyObj don`t work");
  console.log("isEmptyObj ok");
};

