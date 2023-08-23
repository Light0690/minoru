import { fill } from "../src/fill"

describe("fill", () => {
  test("корректные параметры", () => {
    expect(fill([1, 2, 3], "a")).toStrictEqual(["a", "a", "a"]);
  });

  test("пустой массив", () => {
    expect(fill([], undefined)).toStrictEqual([]);
  });

  //throw error - param !== array
  // test("отсутствие параметров", () => {
  //   expect(() => {
  //     fill();
  //   }).toThrow();
  // });
  
  // test("некорректные параметры", () => {
  //   expect(() => {
  //     fill({});
  //   }).toThrow();
  // });
});
