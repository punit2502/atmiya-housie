// returns 16 numbers between 0 to 99 if data length is 100
export const getTicketsNumber = (min, max) => {
  const numbers = [];

  while (numbers.length !== 15) {
    const number = Math.floor(Math.random() * (max - min)) + min;
    if (!numbers.includes(number)) numbers.push(number);
  }
  return numbers;
};
