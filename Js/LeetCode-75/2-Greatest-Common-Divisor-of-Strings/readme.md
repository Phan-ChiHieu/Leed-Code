# 1071. Greatest Common Divisor of Strings

## Yêu cầu:

    - Cho 2 chuỗi str1 và str2 tìm giá trị chung giống nhau lớn nhất của 2 chuỗi (ước chung lớn nhất)

## Solution:

    - Kiểm tra nếu str1+str2 !== str2+str1 thì return "".
    - Viết thuật toán tim ước chung lớn nhất
    - Sau đó dùng cắt chuỗi từ 0 đến giá trị number là ước chung lơn nhất. Dùng substring(start, end) để cắt chuỗi với start là vị trí bắt đầu và end là vị trí kết thúc không lấy giá tri của end chỉ lấy đến end-1

# Thuật toán tìm ước chung lơn nhất Euclid

Thuật toán Euclid, còn được gọi là "Thuật toán Euclid Euclide," là một thuật toán được sử dụng để tính ước chung lớn nhất (GCD - Greatest Common Divisor) của hai số nguyên dương. GCD của hai số nguyên là số nguyên lớn nhất mà cả hai số đều chia hết cho nó.

    Cách hoạt động của thuật toán Euclid:

    Bắt đầu với hai số nguyên dương a và b, với a lớn hơn hoặc bằng b.

    Chia a cho b và tính phần dư, ký hiệu là r.

    Nếu r bằng 0, tức là b chia hết cho a, thì GCD của a và b chính là a.

    Nếu r không bằng 0, ta gán a bằng b và b bằng r, sau đó quay lại bước 2.

    Thuật toán này tiếp tục lặp lại việc chia a cho b và cập nhật giá trị của a và b cho đến khi r bằng 0. Khi đó, a sẽ là GCD của hai số ban đầu.

    Thuật toán Euclid là một trong những phương pháp hiệu quả nhất để tính GCD và được sử dụng trong nhiều lĩnh vực toán học và máy tính.
