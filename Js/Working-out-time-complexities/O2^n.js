function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }

  console.log("n", n);
  console.log("n - 1::::", n - 1);
  console.log("n - 2::::", n - 2);

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const result = fibonacciRecursive(6);
console.log("Kết quả của số Fibonacci là:", result);

/*

Số Fibonacci được định nghĩa như sau:

Fibonacci(0) = 0
Fibonacci(1) = 1
Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2) với n >= 2
Đặt n = 5 và sử dụng hàm fibonacciRecursive:

n = 5:

Gọi fibonacciRecursive(5 - 1) (gọi là A).
Gọi fibonacciRecursive(5 - 2) (gọi là B).
fibonacciRecursive(5) = A + B.
n = 4:

Gọi fibonacciRecursive(4 - 1) (gọi là A1).
Gọi fibonacciRecursive(4 - 2) (gọi là B1).
fibonacciRecursive(4) = A1 + B1.
n = 3:

Gọi fibonacciRecursive(3 - 1) (gọi là A2).
Gọi fibonacciRecursive(3 - 2) (gọi là B2).
fibonacciRecursive(3) = A2 + B2.
n = 2:

Gọi fibonacciRecursive(2 - 1) (gọi là A3).
Gọi fibonacciRecursive(2 - 2) (gọi là B3).
fibonacciRecursive(2) = A3 + B3.
n = 1:

Trả về 1 (vì n = 1).
n = 0:

Trả về 0 (vì n = 0).
Bây giờ, chúng ta sẽ "truy ngược" từ fibonacciRecursive(2) đến fibonacciRecursive(5):

fibonacciRecursive(2) = A3 + B3.
fibonacciRecursive(3) = A2 + B2 = (A3 + B3) + B2.
fibonacciRecursive(4) = A1 + B1 = ((A3 + B3) + B2) + (A1 + B1).
fibonacciRecursive(5) = A + B = (((A3 + B3) + B2) + (A1 + B1)) + (A + B).


*/
