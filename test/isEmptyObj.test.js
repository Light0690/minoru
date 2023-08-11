import assert from "assert";

import { isEmptyObj } from "../lib/isEmptyObj.js";

describe("isEmptyObj", () => {
  it("проверяет обьект, на наличие значений", () => {
    assert.equal(isEmptyObj({}), true);
  });
}); 
