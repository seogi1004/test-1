import { RawTransaction, Transaction } from "@/models/transaction";
import { generateId } from "@/utils/id";

const getList = async () => {
  const response = await fetch("./samples");
  const rawList = JSON.parse(await response.json()) as RawTransaction[];
  return rawList.map((rawTransaction) => {
    return Transaction.fromJson(generateId(), rawTransaction);
  });
};

export { getList };
