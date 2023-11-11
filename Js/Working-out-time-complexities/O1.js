function constantRuntimes(arr) {
  //

  let x = 5; // O(1)

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let value = arr[2]; // O(1)

  let sum = 5 + 10; // O(1)

  console.log("hello world"); // O(1)

  let obj = { name: "Bob", age: 25 };

  let personName = obj.name; // O(1)

  function returnConstant() {
    return 42;
  }

  let constantvaue = returnConstant(); // O(1)

  for (let i = 0; i < 5; i++) {
    console.log(i);
  } // O(1)
}

constantRuntimes();
