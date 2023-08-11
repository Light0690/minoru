import assert from "assert";

import { getUniqueValue } from "../lib/getUniqueValue.js";

describe("getUniqueValue", () => {
  it("приводит массив к уникальным значениям", () => {
    assert.equal(getUniqueValue([1, 2, 3, 1, 2, 3]).length, 3);
  });
}); 
