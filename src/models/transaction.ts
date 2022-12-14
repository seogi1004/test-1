import { time2Number } from "@/utils/format.util";

export interface RawTransaction {
  애플리케이션: string;
  Domain: string;
  Instance: string;
  "클라이언트 IP": string;
  "시작 시간": string;
  "종료 시간": string;
  응답시간: string;
  "메서드 시간": string;
  "SQL 시간": string;
  "External Call 시간": string;
  "Batch 시간": string;
  Fetch시간: string;
  "CPU 시간": string;
  ERROR: string;
}

type ColumnNames =
  | "애플리케이션"
  | "Domain"
  | "Instance"
  | "클라이언트 IP"
  | "시작 시간"
  | "종료 시간"
  | "응답시간"
  | "메서드 시간"
  | "SQL 시간"
  | "External Call"
  | "Batch 시간"
  | "Fetch시간"
  | "CPU 시간"
  | "ERROR";

export class Transaction {
  readonly startTime: number;
  readonly endTime: number;
  readonly responseTime: number;
  readonly methodTime: number;
  readonly sqlTime: number;
  readonly externalCallTime: number;
  readonly batchTime: number;
  readonly fetch: number;
  readonly cpu: number;

  static nameMap: Record<Exclude<keyof Transaction, "id">, ColumnNames> = {
    application: "애플리케이션",
    domain: "Domain",
    instance: "Instance",
    clientIp: "클라이언트 IP",
    startTime: "시작 시간",
    endTime: "종료 시간",
    responseTime: "응답시간",
    methodTime: "메서드 시간",
    sqlTime: "SQL 시간",
    externalCallTime: "External Call",
    batchTime: "Batch 시간",
    fetch: "Fetch시간",
    cpu: "CPU 시간",
    error: "ERROR",
  };

  static keyOrder: (keyof typeof Transaction.nameMap)[] = [
    "application",
    "domain",
    "instance",
    "clientIp",
    "startTime",
    "endTime",
    "responseTime",
    "methodTime",
    "sqlTime",
    "externalCallTime",
    "batchTime",
    "fetch",
    "cpu",
    "error",
  ];

  constructor(
    readonly id: string,
    readonly application: string,
    readonly domain: string,
    readonly instance: string,
    readonly clientIp: string,
    startTime: string,
    endTime: string,
    response: string,
    methodTime: string,
    sqlTime: string,
    externalCallTime: string,
    batchTime: string,
    fetch: string,
    cpu: string,
    readonly error: string
  ) {
    this.startTime = time2Number(startTime);
    this.endTime = time2Number(endTime);
    this.responseTime = Number(response);
    this.methodTime = Number(methodTime);
    this.sqlTime = Number(sqlTime);
    this.externalCallTime = Number(externalCallTime);
    this.batchTime = Number(batchTime);
    this.fetch = Number(fetch);
    this.cpu = Number(cpu);
  }

  static fromJson(id: string, json: RawTransaction): Transaction {
    return new Transaction(
      id,
      json.애플리케이션,
      json.Domain,
      json.Instance,
      json["클라이언트 IP"],
      json["시작 시간"],
      json["종료 시간"],
      json.응답시간,
      json["메서드 시간"],
      json["SQL 시간"],
      json["External Call 시간"],
      json["Batch 시간"],
      json["Fetch시간"],
      json["CPU 시간"],
      json.ERROR
    );
  }

  static getName(key: keyof typeof Transaction.nameMap): string {
    return Transaction.nameMap[key];
  }
}
