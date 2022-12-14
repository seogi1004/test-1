import { flip } from "@/utils/function.util";

const sortNumAsc = (a: number, b: number) => a - b;
const sortNumDesc = flip(sortNumAsc);
const sortStrAsc = (a: string, b: string) => a.localeCompare(b);
const sortStrDesc = flip(sortStrAsc);

const sortAsc = (a: any, b: any) => {
  if (typeof a === "number") return sortNumAsc(a, b);
  if (typeof a === "string") return sortStrAsc(a, b);
  return 0;
};
const sortDsc = flip(sortAsc);
const setSortOrder = (order: "asc" | "desc") =>
  order === "asc" ? sortAsc : sortDsc;

const sortBy = <T extends string>(
  key: T,
  sortFn: (a: any, b: any) => number
) => {
  return (a: any, b: any) => sortFn(a[key], b[key]);
};

export {
  sortNumAsc,
  sortNumDesc,
  sortStrAsc,
  sortStrDesc,
  sortBy,
  sortAsc,
  sortDsc,
  setSortOrder,
};
