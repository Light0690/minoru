import { isUniqueValue } from "../lib/minoru.js";

export const checkIsUniqueValue = (() => {
  const res = isUniqueValue([1, 2, 3, 1]);
  if (res.length === 4) throw new Error("Unique is not working");
  console.log("isUniqueValue ✅");
})();
