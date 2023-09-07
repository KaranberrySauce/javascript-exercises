const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  const fibNum = [0, 1];
  for (let index = 1; index < num; index++) {
    fibNum.push(fibNum[index] + fibNum[index - 1]);
  }
  return fibNum[num];
};

// Do not edit below this line
module.exports = fibonacci;
