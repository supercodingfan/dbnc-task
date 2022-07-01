const printResult = (num: number) => {
  if (num % 22 === 0) {
    console.log("candybar");
  } else if (num % 11 === 0) {
    console.log("bar");
  } else if (num % 2 === 0) {
    console.log("candy");
  } else {
    console.log(num);
  }
};
