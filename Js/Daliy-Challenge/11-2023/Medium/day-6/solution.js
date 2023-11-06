/*
Example:

    Input
    ["SeatManager", "reserve", "reserve", "unreserve", "reserve", "reserve", "reserve", "reserve", "unreserve"]
    [[5], [], [], [2], [], [], [], [], [5]]
    Output
    [null, 1, 2, null, 2, 3, 4, 5, null]

    Explanation
    SeatManager seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
    seatManager.reserve();    // All seats are available, so return the lowest numbered seat, which is 1.
    seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
    seatManager.unreserve(2); // Unreserve seat 2, so now the available seats are [2,3,4,5].
    seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
    seatManager.reserve();    // The available seats are [3,4,5], so return the lowest of them, which is 3.
    seatManager.reserve();    // The available seats are [4,5], so return the lowest of them, which is 4.
    seatManager.reserve();    // The only available seat is seat 5, so return 5.
    seatManager.unreserve(5); // Unreserve seat 5, so now the available seats are [5].

*/

class SeatManager {
  constructor(n) {
    this.reservations = 0;
    this.minHeap = [];
  }

  reserve() {
    // Nếu array === 0
    if (this.minHeap.length === 0) {
      // Thì mỗi lần seatManager.reserve()
      // this.reservations tăng lên 1 đơn vị
      // Vì theo đề bài là lấy số ghế theo thư tự từ thấp đến cao
      return ++this.reservations;
    } else {
      // Ngược lại
      // seatManager.reserve() => Nếu this.minHeap.length !== 0
      // Ta sẽ sắp xếp các số trong array theo thứ tự từ thấp đến cao
      this.minHeap.sort((a, b) => a - b);
      // Sau đó ta sẽ xoá số đầu tiên đi
      // Vì số đầu tiền trong array sẽ được đặt tiếp khi gọi hàm seatManager.reserve()
      return this.minHeap.shift();
    }
  }

  unreserve(seatNumber) {
    // Trường hợp huỷ đặt ghế
    // seatNumber: số ghê muốn huỷ
    // Nếu seatNumber === this.reservations
    if (seatNumber === this.reservations) {
      // Nếu chỗ ngồi huỷ là chỗ ngồi đã được đặt trước cuối cùng thì giảm reservations đi 1
      //
      this.reservations--;
    } else {
      // Ngược lại thì đẩy chỗ ngồi huỷ vào hàng chờ đặt lại minHeap
      this.minHeap.push(seatNumber);
    }
  }
}

const seatManager = new SeatManager(5); // Khởi tạo SeatManager với 5 ghế.

console.log(seatManager);

console.log(seatManager.reserve()); // 1
console.log(seatManager.reserve()); // 2
console.log(seatManager.reserve()); // 3

seatManager.unreserve(2); // remove 2

// console.log(seatManager); // { reservations: 3, minHeap: [2] }

console.log(seatManager.reserve()); // 2

console.log(seatManager); // { reservations: 3, minHeap: [] }



// const test = Array.from({ length: 5 }, (_, index) => index + 1);

// console.log("::::", test);
