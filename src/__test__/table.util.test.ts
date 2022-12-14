import { Transaction } from "@/models/transaction";
import {
  extractMaxResponse,
  replaceElements,
  setLimitsToGetValue,
  setTotalForRatio,
  setTotalForValue,
} from "@/utils/table.util";

describe("table.util.ts test", () => {
  test("extract max response는 transaction instance 중 가장 높은 responseTime 을 반환하는 함수다.", () => {
    const responseTime1 = "3";
    const responseTime2 = "2";
    const transaction1 = new Transaction(
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      responseTime1,
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0"
    );
    const transaction2 = new Transaction(
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      responseTime2,
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0"
    );
    const transactionList = [transaction1, transaction2];
    const maxResponse = extractMaxResponse(transactionList);

    expect(maxResponse).toBe(3);
  });

  test("extract max response 는 빈 배열을 넣으면 0을 반환하는 함수다.", () => {
    const transactionList: Transaction[] = [];
    const maxResponse = extractMaxResponse(transactionList);

    expect(maxResponse).toBe(0);
  });

  test("setTotalForRatio 는 값으로 비율을 구하기 위한 total값을 저장하는 함수다", () => {
    const getRatioFrom = setTotalForRatio(2000);
    const ratio = getRatioFrom(200);
    expect(ratio).toBe(10);
  });

  test("setTotalForRatio 는 total이 0이면 비율도 0을 반환한다", () => {
    const getRatioFrom = setTotalForRatio(0);
    const ratio = getRatioFrom(200);
    expect(ratio).toBe(0);
  });

  test("setTotalForValue 는 비율로 값을 구하기 위한 total값을 저장하는 함수다", () => {
    const getValueFrom = setTotalForValue(2000);
    const value = getValueFrom(10);
    expect(value).toBe(200);
  });

  test("setTotalForValue 는 total이 0이면 비율도 0을 반환한다", () => {
    const getValueFrom = setTotalForValue(0);
    const value = getValueFrom(10);
    expect(value).toBe(0);
  });

  test("setLimitsToGetValue 는 최소값과 최대값을 지정하여 그 사잇값을 반환하는 함수다", () => {
    const getValueBy = setLimitsToGetValue(0, 100);
    const value1 = getValueBy(200);
    const value2 = getValueBy(-200);
    const value3 = getValueBy(50);

    expect(value1).toBe(100);
    expect(value2).toBe(0);
    expect(value3).toBe(50);
  });

  test("replaceElements 는 배열의 특정 인덱스에 다른 배열의 요소를 대체하는 함수다", () => {
    const array = [1, 2, 3, 4, 5];
    const index = 1;
    const values = [6, 7, 8];
    const replaced = replaceElements(array, index, values);

    expect(replaced).toEqual([1, 6, 7, 8, 5]);
  });

  test("replaceElements 는 교체할 배열이 원래 배열 길이를 초과할 경우 원래 배열 길이만큼만 교체 후 반환하는 함수다.", () => {
    const array = [1, 2, 3, 4, 5];
    const index = 3;
    const values = [6, 7, 8];
    const replaced = replaceElements(array, index, values);

    expect(replaced).toEqual([1, 2, 3, 6, 7]);
  });
});
