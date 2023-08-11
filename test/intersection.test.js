import assert from "assert";

import { intersection } from "../lib/intersection.js";

describe("intersection", () => {
  it("возвращает массив значений из обоих массивов", () => {
    assert.equal(intersection([1,4,3,4,5],[1,3])[0],[1]);
    assert.equal(intersection([1,4,3,4,5],[1,3])[1],[3]);
  });
}); 
