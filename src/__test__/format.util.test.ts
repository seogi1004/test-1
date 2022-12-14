import { number2Time, time2Number } from "@/utils/format.util";

describe("format.util.ts test", () => {
  test("time2Number는 시간을 숫자로 바꾼다.", () => {
    expect(time2Number("00:00:00 000")).toBe(0);
    expect(time2Number("00:00:00 001")).toBe(1);
    expect(time2Number("00:00:01 000")).toBe(1000);
    expect(time2Number("00:01:00 000")).toBe(60000);
    expect(time2Number("01:00:00 000")).toBe(3600000);
    expect(time2Number("01:01:01 001")).toBe(3661001);
  });

  test("number2Time은 숫자를 시간으로 바꾼다.", () => {
    expect(number2Time(0)).toBe("00:00:00 000");
    expect(number2Time(1)).toBe("00:00:00 001");
    expect(number2Time(1000)).toBe("00:00:01 000");
    expect(number2Time(60000)).toBe("00:01:00 000");
    expect(number2Time(3600000)).toBe("01:00:00 000");
    expect(number2Time(3661001)).toBe("01:01:01 001");
  });
});
