import { intersection } from "../lib/intersection.js";

describe("intersection", () => {
  test("возвращает массив значений из обоих массивов", () => {
    expect(intersection([1, 4, 3, 4, 5], [1, 3])).toStrictEqual([1, 3]);
    expect(intersection(["a", "b", "c", "d", "e"], ["a", "b"])).toStrictEqual([
      "a",
      "b",
    ]);
    expect(
      intersection(
        [
          100000000000000000000n,
          400000000000000000000n,
          300000000000000000000n,
          400000000000000000000n,
          500000000000000000000n,
        ],
        [100000000000000000000n, 300000000000000000000n]
      )
    ).toStrictEqual([100000000000000000000n, 300000000000000000000n]);
    expect(intersection([true], [false, true])).toStrictEqual([true]);
    // - expect(intersection([[],1,'a'], [[]])).toStrictEqual([[]]);
    // - expect(intersection([{},1,'a'], [{}])).toStrictEqual([{}]);
    expect(intersection([null, 1, "a"], [null])).toStrictEqual([null]);
    // - expect(intersection([undefined,1,'a'], [undefined])).toStrictEqual([undefined]);
    expect(intersection([Proxy, 1, "a"], [Proxy])).toStrictEqual([Proxy]);
    expect(intersection([Promise, 1, "a"], [Promise])).toStrictEqual([Promise]);

    //throw error - params !== array
    expect(() => {
      intersection();
    }).toThrow();
    expect(() => {
      intersection([],{});
    }).toThrow();
    expect(() => {
      intersection([],'a');
    }).toThrow();
    expect(() => {
      intersection([],1);
    }).toThrow();
  });
});
