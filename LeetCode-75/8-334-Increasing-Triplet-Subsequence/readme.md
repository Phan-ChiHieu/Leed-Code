# Problem

    Input: nums = [1,2,3,4,5]
    Output: true
    Explanation: Any triplet where i < j < k is valid.

## 1. nếu có bất kỳ dãy con theo thứ tự tăng dần thì trả về true còn không thì trả về false

## 2. Khai báo 2 biến với giá trị ban đầu là Infinity (giá trị số lớn nhất không có giới hạn) với tên firstNumber,secondNumber

## 3. Dùng for...of để lấy ra từng value trong array truyền vào

## 4. Nếu currentValue lớn hơn firstNumber,secondNumber thì return true

## 5. Nếu currentValue > firstNumber thì

    - Gán secondNumber = currentValue

## 6. Ngược lại thì:

    - Gán firstNumber = currentValue

## 7. Nếu không thoả các dk trong for thì return false    
