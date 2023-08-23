import { intersection } from "../lib/intersection.js";

describe("intersection", () => {
  test("корректные параметры", () => {
    expect(intersection([1, 4, 3, 4, 5], [1, 3])).toStrictEqual([1, 3]);
  });

  test("пустой массив", () => {
    expect(intersection([], [1, 3])).toStrictEqual([]);
  });

  //throw error - params !== array
  test("отсутствие параметров", () => {
    expect(() => {
      intersection();
    }).toThrow();
  });

  test("некорректные параметры", () => {
    expect(() => {
      intersection({}, {});
    }).toThrow();
  });

  // don`t work
  // - expect(intersection([[],1,'a'], [[]])).toStrictEqual([[]]);
  // - expect(intersection([{},1,'a'], [{}])).toStrictEqual([{}]);
  // - expect(intersection([undefined,1,'a'], [undefined])).toStrictEqual([undefined]);
});
