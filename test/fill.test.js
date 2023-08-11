import assert from "assert";

import { fill } from "../lib/fill.js";

describe("fill", () => {
  it("приводит массив к одному значению", () => {
    assert.equal(fill([1, 2, 3], "a")[0], "a");
  });
});
