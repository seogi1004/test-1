import {
  sortAsc,
  sortBy,
  sortDsc,
  sortNumAsc,
  sortNumDesc,
  sortStrAsc,
  sortStrDesc,
} from "@/utils/sort.util";

describe("sort.util.ts test", () => {
  test("sortNumAsc는 숫자 배열을 오름차순으로 정렬한다.", () => {
    const arrToSort = [2, 4, 1, 5, 3];

    const sortedArr = arrToSort.sort(sortNumAsc);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });
  test("sortNumAsc는 숫자 배열을 내림차순으로 정렬한다.", () => {
    const arrToSort = [2, 4, 1, 5, 3];

    const sortedArr = arrToSort.sort(sortNumDesc);
    expect(sortedArr).toEqual([5, 4, 3, 2, 1]);
  });
  test("sortNumAsc는 문자열 배열을 오름차순으로 정렬한다.", () => {
    const arrToSort = ["b", "d", "a", "e", "c"];

    const sortedArr = arrToSort.sort(sortStrAsc);
    expect(sortedArr).toEqual(["a", "b", "c", "d", "e"]);
  });
  test("sortNumAsc는 문자열 배열을 내림차순으로 정렬한다.", () => {
    const arrToSort = ["b", "d", "a", "e", "c"];

    const sortedArr = arrToSort.sort(sortStrDesc);
    expect(sortedArr).toEqual(["e", "d", "c", "b", "a"]);
  });

  test("sortAsc는 들어오는 자료형에 상관없이 오름차순 정렬한다.", () => {
    const numArrToSort = [2, 4, 1, 5, 3];
    const strArrToSort = ["b", "d", "a", "e", "c"];

    const sortedNumArr = numArrToSort.sort(sortAsc);
    const sortedStrArr = strArrToSort.sort(sortAsc);
    expect(sortedNumArr).toEqual([1, 2, 3, 4, 5]);
    expect(sortedStrArr).toEqual(["a", "b", "c", "d", "e"]);
  });

  test("sortDsc는 들어오는 자료형에 상관없이 내림차순 정렬한다.", () => {
    const numArrToSort = [2, 4, 1, 5, 3];
    const strArrToSort = ["b", "d", "a", "e", "c"];

    const sortedNumArr = numArrToSort.sort(sortDsc);
    const sortedStrArr = strArrToSort.sort(sortDsc);
    expect(sortedNumArr).toEqual([5, 4, 3, 2, 1]);
    expect(sortedStrArr).toEqual(["e", "d", "c", "b", "a"]);
  });

  test("sortAsc 는 숫자와 문자열만 정렬가능하다.", () => {
    const arrToSort = [true, false, null, undefined, {}, []];

    const sortedArr = [...arrToSort].sort(sortDsc);
    expect(sortedArr).toStrictEqual([true, false, null, {}, [], undefined]);
  });

  test("sortBy는 객체 배열을 특정 키를 기준으로 받은 정렬 함수를 통해 정렬한다.", () => {
    const arrToSort = [
      { name: "b", age: 2 },
      { name: "d", age: 15 },
      { name: "a", age: 12 },
      { name: "e", age: 55 },
      { name: "c", age: 103 },
    ];

    const sortedByName = arrToSort.sort(sortBy("name", sortAsc));
    expect(sortedByName).toEqual([
      { name: "a", age: 12 },
      { name: "b", age: 2 },
      { name: "c", age: 103 },
      { name: "d", age: 15 },
      { name: "e", age: 55 },
    ]);

    const sortedByAge = arrToSort.sort(sortBy("age", sortDsc));
    expect(sortedByAge).toEqual([
      { name: "c", age: 103 },
      { name: "e", age: 55 },
      { name: "d", age: 15 },
      { name: "a", age: 12 },
      { name: "b", age: 2 },
    ]);
  });
});
