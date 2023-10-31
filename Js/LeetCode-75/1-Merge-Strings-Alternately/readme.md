# 1768. Merge Strings Alternately

## Yêu cầu:

    -  có 2 chuỗi được truyền vào là word1 và word2
    - Yêu cầu merge xen kẽ 2 chuỗi lại với nhau

## Solution:

    - Khai bao biến result với giá trị ban đầu là "".
    - Kiểm tra xem chuỗi nào dài nhất với Math.max(sizeA,sizeB). Sau đó gán kết quả vào biến _maxLength
    - Tạo for với i = 0; i < _maxLength
    - Kiểm tra điều kiện nếu i < word1.length thì result += word1[i]
    - Kiểm tra điều kiện nếu i < word2.length thì result += word2[i]
    - Và cứ thế cho đến khi hết vòng lặp
    - Sau đó return result
