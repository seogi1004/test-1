import { Transaction } from "@/models/transaction";

const getMax = (oldMax: number, value: number) => Math.max(oldMax, value);
const getMin = (oldMin: number, value: number) => Math.min(oldMin, value);

const extractMaxResponse = (transactionList: Transaction[]) => {
  return transactionList
    .map((transaction) => transaction.responseTime)
    .reduce(getMax, 0);
};

const setTotalForRatio = (total: number) => {
  return (value: number) => {
    if (total === 0) return 0;
    return (value / total) * 100;
  };
};

const setTotalForValue = (total: number) => {
  return (ratio: number) => (total === 0 ? 0 : (ratio / 100) * total);
};

const setLimitsToGetValue = (minLimit: number, maxLimit: number) => {
  return (value: number) => getMin(maxLimit, getMax(minLimit, value));
};

const replaceElements = <T>(array: T[], index: number, values: T[]) => {
  return [
    ...array.slice(0, index),
    ...values,
    ...array.slice(index + values.length),
  ].slice(0, array.length);
};

export {
  extractMaxResponse,
  setTotalForRatio,
  setTotalForValue,
  setLimitsToGetValue,
  replaceElements,
};
