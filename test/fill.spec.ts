import { fill } from "../src/fill"

describe("fill", () => {
  test("корректные параметры", () => {
    expect(fill([1, 2, 3], "a")).toStrictEqual(["a", "a", "a"]);
  });

  test("пустой массив", () => {
    expect(fill([], undefined)).toStrictEqual([]);
  });
  
  test("некорректные параметры", () => {
    const param = {};
    expect(() => {
       fill(param as any[], 1);
    }).toThrow();
  });
});
