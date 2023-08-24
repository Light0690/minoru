import { getUniqueValue } from "../src/getUniqueValue";

describe("getUniqueValue", () => {
  test("корректные параметры", () => {
    expect(getUniqueValue([1, 2, 3, 1, 2, 3])).toStrictEqual([1, 2, 3]);
  });

  test("пустой массив", () => {
    expect(getUniqueValue([])).toStrictEqual([]);
  });

  test("некорректные параметры", () => {
    expect(() => {
      getUniqueValue({} as any[]);
    }).toThrow();
  });

  // don`t work
  // - expect(getUniqueValue([{}, {}, {}])).toStrictEqual([{}]);
  // - expect(getUniqueValue([[], [], []])).toStrictEqual([[]]);
});
