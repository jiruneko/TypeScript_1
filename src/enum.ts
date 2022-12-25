export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);

// const MonthsJs = {
//   January: 0,
//   February: 1
// }

// console.log(Months.January);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#000800',
  BLUE = '#0000FF',
  YELLOW = '#FFFF00',
  BLACK = '#000000'
}

let blue = COLORS.BLUE;
console.log({ blue });

COLORS.YELLOW;
