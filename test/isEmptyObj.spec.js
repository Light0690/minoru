import { isEmptyObj } from "../lib/isEmptyObj.js";

describe("isEmptyObj", () => {
  test("корректные параметры", () => {
    expect(isEmptyObj({})).toStrictEqual(true);
    expect(isEmptyObj([])).toStrictEqual(true);
    expect(isEmptyObj({ 1: "a" })).toStrictEqual(false);
  });

  //throw error - param !== object
  test("отсутствие параметров", () => {
    expect(() => {
      isEmptyObj();
    }).toThrow();
  });
  
  test("некорректные параметры", () => {
    expect(() => {
      isEmptyObj(null);
    }).toThrow();
    expect(() => {
      isEmptyObj(undefined);
    }).toThrow();
  });
});
