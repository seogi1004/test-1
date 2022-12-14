import { flip } from "@/utils/function.util";

describe("function.util.ts test", () => {
  test("flip은 인자로 받은 함수의 순서를 역순으로 바꾼다.", () => {
    const subtract = (a: number, b: number) => a - b;
    const flippedSubtract = flip(subtract);

    const identity = (a: string) => a;
    const flippedIdentity = flip(identity);

    const addSubtractAdd = (a: number, b: number, c: number) => {
      return a + b - c;
    };
    const flippedAddSubtractAdd = flip(addSubtractAdd);

    expect(subtract(3, 2)).toBe(1);
    expect(flippedSubtract(3, 2)).toBe(-1);

    expect(identity("a")).toBe("a");
    expect(flippedIdentity("a")).toBe("a");

    expect(addSubtractAdd(1, 2, 3)).toBe(0);
    expect(flippedAddSubtractAdd(1, 2, 3)).toBe(4);
  });
});
