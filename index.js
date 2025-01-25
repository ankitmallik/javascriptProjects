const arr = [1, 2, 3, 4, 5, 100, 300, 50, 70];

function maxNumer(arr) {
  let maxNumber = -Infinity;

  for (let i = 0; i < arr.length; ++i) {
    const num = arr[i];

    if (num > maxNumber) {
      maxNumber = num;
    }
  }

  return maxNumber;
}
const num = maxNumer(arr);

console.log("Numer is :",num);
