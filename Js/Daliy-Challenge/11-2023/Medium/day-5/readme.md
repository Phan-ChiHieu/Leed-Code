Question: Find the Winner of an Array Game ?

- A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]).
- In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0, and the smaller integer moves to the end of the array.
- The game ends when an integer wins k consecutive rounds.

===========================================

- Example:
  Input: arr = [2,1,3,5,4,6,7], k = 2
  Output: 5
  Explanation: Let's see the rounds of the game:
  Round | arr | winner | win_count
  1 | [2,1,3,5,4,6,7] | 2 | 1
  2 | [2,3,5,4,6,7,1] | 3 | 1
  3 | [3,5,4,6,7,1,2] | 5 | 1
  4 | [5,4,6,7,1,2,3] | 5 | 2

So we can see that 4 rounds will be played and 5 is the winner because it wins 2 consecutive games.

===========================================

- Solution:

let getWinner = function(arr, k) {
if(k ===1) return Math.max(arr[0], arr[1])

if(k >= arr.length) return Math.max(...arr)

let winner = arr[0];
let win_count = 0;

for(let i =1; i < arr.length; i++) {
if(winner > arr[i]) {
win_count++
} else {
winner = arr[i]
win_count = 1
}

if(win_count === k){
return winner
}
}
return winner
};
