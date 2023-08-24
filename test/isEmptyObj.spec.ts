import { isEmptyObj } from "../src/isEmptyObj";

describe("isEmptyObj", () => {
  test("корректные параметры", () => {
    expect(isEmptyObj({})).toStrictEqual(true);
    expect(isEmptyObj([])).toStrictEqual(true);
    expect(isEmptyObj({ 1: "a" })).toStrictEqual(false);
  });
  
  test("некорректные параметры", () => {
    expect(() => {
      isEmptyObj(null as unknown as object);
    }).toThrow();
    expect(() => {
      isEmptyObj(undefined as unknown as object);
    }).toThrow();
  });
});
