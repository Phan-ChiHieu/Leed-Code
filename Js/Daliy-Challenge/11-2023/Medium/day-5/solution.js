let arr = [2, 1, 3, 5, 4, 6, 7],
  k = 2;

let getWinner = function (arr, k) {
  if (k === 1) return Math.max(arr[0], arr[1]);

  if (k >= arr.length) return Math.max(...arr);

  let winner = arr[0];
  let win_count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (winner > arr[i]) {
      win_count++;
    } else {
      winner = arr[i];
      win_count = 1;
    }

    if (win_count === k) {
      return winner;
    }
  }
  return winner;
};
