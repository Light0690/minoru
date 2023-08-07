import { checkIsEmptyObj } from "./isEmptyObj.test.js";
import { unique } from "../lib/minoru.js";


const uniqueValues = unique([1, 2, 3, 1]);
if (uniqueValues.length === 4) throw new Error("Unique is not working");
console.log("✅ All looks good");

checkIsEmptyObj();