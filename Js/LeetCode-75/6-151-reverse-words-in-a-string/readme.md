# Problem

Input: s = "the sky is blue".

Output: "blue is sky the"

## 1. Theo đề bài có chuỗi s là giá trị ta mong muốn đảo ngược

## 2.Khai báo hàm reverseWords(s) để thực hiện việc đảo ngược các từ trong chuỗi s

     - Khai báo const ret = [] để chứa các từ đã được đảo ngươc
     - Khai báo const word = [] để xây dựng các từ cần được đảo ngược (ý là push từn chữ cái vào rồi dùng join("") nối các chữ cái trong array thành string rồi lại push vào ret)

## 3.Sử dụng vòng lặp for để duyệt qua từng ký tự trong chuỗi s.

## 4. Trong for nếu thấy ký tự " " đây là dấu phân cách giữa các từ thì ta thực hiện các bước con sau

    - Dùng str.charAt(index) => để lấy ra từng ký tự trong một chuỗi string
    
    - Kiểm tra word khác rỗng (word.length > 0) thì gộp các ký tự trong mảng word (vd: ['h','e','l','l','0']) với join('') => 'hello' sau đó thêm vào đầu (index[0]) của mảng ret bằng unshift()

        vd code: word.length > 0 && ret.unshift(word.join(""));
    - Rồi đặt word = [] trở lại

## 5. Nếu ký tự không phải là dấu cách, nó sẽ được thêm vào mảng word, một ký tự tại một thời điểm bằng push()

## 6. Sau khi kết thúc vòng lặp cần kiểm tra: 
    - 1: Kiểm tra xem có từ cuối cùng trong chuỗi s không vì có thể chuỗi s không kết thúc bằng dấu cách (" "). Nếu không kết thúc bằng dấu cách (" ") thì từ cuối cùng sẽ không được thêm vào ret
    - 2:  Vì vậy, sau vòng lặp, ta lại kiểm tra một lần nữa và nếu word không rỗng, ta thêm từ cuối cùng vào ret.

 ## 7. Cuối cùng, sau khi đã xây dựng mảng ret với các từ đã đảo ngược:
    - Ta sử dụng ret.join(" ") để chuyển mảng này thành một chuỗi với các từ được nối lại bằng dấu cách. Kết quả là chuỗi đã đảo ngược.