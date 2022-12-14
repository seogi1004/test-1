const [HOUR, MINUTE, SECOND] = [3600, 60, 1].map((num) => num * 1000);

const time2Number = (time: string) => {
  const [bigTime, millisec] = time.split(" ");
  const [hour, minute, second] = bigTime.split(":");
  return (
    Number(hour) * HOUR +
    Number(minute) * MINUTE +
    Number(second) * SECOND +
    Number(millisec)
  );
};
const toDoubleDigits = (num: number) => `0${num}`.slice(-2);
const toTripleDigits = (num: number) => `00${num}`.slice(-3);
const number2Time = (number: number) => {
  const hour = Math.floor(number / HOUR);
  const minute = Math.floor((number % HOUR) / MINUTE);
  const second = Math.floor((number % MINUTE) / SECOND);
  const millisec = Math.floor(number % 1000);
  return `${toDoubleDigits(hour)}:${toDoubleDigits(minute)}:${toDoubleDigits(
    second
  )} ${toTripleDigits(millisec)}`;
};

const comma = new Intl.NumberFormat("ko-KR").format;
const intPercent = (number: number) => `${Math.round(number)}%`;

export { time2Number, number2Time, comma, intPercent };
