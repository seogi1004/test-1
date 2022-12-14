import { Transaction } from "@/models/transaction";

export class TransactionSort {
  readonly order: "asc" | "desc";
  readonly key?: keyof typeof Transaction.nameMap;

  constructor(
    key?: keyof typeof Transaction.nameMap,
    order: "asc" | "desc" = "desc"
  ) {
    this.key = key;
    this.order = order;
  }

  copyWith(partial: Partial<TransactionSort>) {
    return new TransactionSort(
      partial.key ?? this.key,
      partial.order ?? this.order
    );
  }

  toggleOrder(key: keyof typeof Transaction.nameMap) {
    if (key === this.key) {
      return this.copyWith({ order: this.order === "asc" ? "desc" : "asc" });
    }
    return this.copyWith({ key, order: "asc" });
  }

  isSortedBy(key: keyof typeof Transaction.nameMap) {
    return key === this.key;
  }
  get currentOrder() {
    return this.order;
  }
  get currentKey() {
    return this.key;
  }
  get isAsc() {
    return this.order === "asc";
  }
}
