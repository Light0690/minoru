import { getUniqueValue } from "../lib/getUniqueValue.js";

describe("getUniqueValue", () => {
  test("приводит массив к уникальным значениям", () => {
    expect(getUniqueValue([1, 2, 3, 1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(getUniqueValue(["a", "b", "c", "a", "b", "c"])).toStrictEqual([
      "a",
      "b",
      "c",
    ]);
    expect(
      getUniqueValue([
        100000000000000000000n,
        200000000000000000000n,
        300000000000000000000n,
        100000000000000000000n,
        200000000000000000000n,
        300000000000000000000n,
      ])
    ).toStrictEqual([
      100000000000000000000n,
      200000000000000000000n,
      300000000000000000000n,
    ]);
    expect(
      getUniqueValue([false, false, false, true, true, true])
    ).toStrictEqual([false, true]);
    // - expect(getUniqueValue([{}, {}, {}])).toStrictEqual([{}]);
    // - expect(getUniqueValue([[], [], []])).toStrictEqual([[]]);
    expect(getUniqueValue([null, null, null])).toStrictEqual([null]);
    expect(getUniqueValue([undefined, undefined])).toStrictEqual([undefined]);
    expect(getUniqueValue([Proxy, Proxy, Proxy, Proxy])).toStrictEqual([Proxy]);
    expect(getUniqueValue([Promise, Promise, Promise, Promise])).toStrictEqual([
      Promise,
    ]);

    //throw error - param !== array
    expect(() => {
      getUniqueValue();
    }).toThrow();
    expect(() => {
      getUniqueValue({}, 1);
    }).toThrow();
    expect(() => {
      getUniqueValue(1, 1);
    }).toThrow();
    expect(() => {
      getUniqueValue("a", 1);
    }).toThrow();
    expect(() => {
      getUniqueValue(Promise, 1);
    }).toThrow();
  });
});
