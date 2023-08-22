import { fill } from "../lib/fill.js";

describe("fill", () => {
  test("приводит массив к одному значению", () => {
    expect(fill([1, 2, 3], "a")).toStrictEqual(["a", "a", "a"]);
    expect(fill([1, 2, 3], 1)).toStrictEqual([1, 1, 1]);
    expect(fill([1, 2, 3], [])).toStrictEqual([[], [], []]);
    expect(fill([1, 2, 3], {})).toStrictEqual([{}, {}, {}]);
    expect(fill([1, 2, 3], true)).toStrictEqual([true, true, true]);
    expect(fill([1, 2, 3], null)).toStrictEqual([null, null, null]);
    expect(fill([1, 2], undefined)).toStrictEqual([undefined, undefined]);
    expect(fill([1, 2, 3], Proxy)).toStrictEqual([Proxy, Proxy, Proxy]);
    expect(fill([1, 2, 3], Promise)).toStrictEqual([Promise, Promise, Promise]);
    expect(fill([1, 2, 3], new Error())).toStrictEqual([
      new Error(),
      new Error(),
      new Error(),
    ]);
    expect(fill([1, 2, 3], 100000000000000000000n)).toStrictEqual([
      100000000000000000000n,
      100000000000000000000n,
      100000000000000000000n,
    ]);

    //throw error - param !== array
    expect(() => {
      fill();
    }).toThrow();
    expect(() => {
      fill(1);
    }).toThrow();
    expect(() => {
      fill("a");
    }).toThrow();
    expect(() => {
      fill(Promise);
    }).toThrow();
    expect(() => {
      fill({});
    }).toThrow();
  });
});
