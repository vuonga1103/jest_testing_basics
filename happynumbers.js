const happyNumbers = (n) => {
  let visited = [n];

  while (true) {
    let arrNums = n.toString().split("").map(Number);
    let sum = arrNums.reduce((sum, num) => {
      return num * num + sum;
    }, 0);

    if (sum === 1) return true;
    if (visited.includes(sum)) return false;

    visited.push(sum);
    n = sum;
  }
};

module.exports = happyNumbers;
