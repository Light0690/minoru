import { getUniqueValue } from "../lib/minoru.js";

export const checkGetUniqueValue = (() => {
  const res = getUniqueValue([1, 2, 3, 1]);
  if (res.length === 4) throw new Error("Unique is not working");
  console.log("isUniqueValue ✅");
})();
