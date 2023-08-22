import { isEmptyObj } from "../lib/isEmptyObj.js";

describe("isEmptyObj", () => {
  test("проверяет обьект, на наличие значений", () => {
    expect(isEmptyObj({})).toStrictEqual(true);
    expect(isEmptyObj([])).toStrictEqual(true);
    expect(isEmptyObj({ 1: "a" })).toStrictEqual(false);

    //throw error - param !== object
    expect(() => {
      isEmptyObj(null);
    }).toThrow();
    expect(() => {
      isEmptyObj(undefined);
    }).toThrow();
  });
});
