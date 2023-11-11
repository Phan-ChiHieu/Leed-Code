# i = 0

    - s[i] !== s[start] => s[0] !== s[0] => Khong chay vao if
    - appear = s.length - start = 8 - 0 = 8
    - while (appear > 0 => 8 > 0)
        - res = res + appear = 0 + 8 = 8
        - appear - 1 = 8 -1 = 7
    - Cứ thế cho tới khi kết thúc vong for    

# i = 1

    - s[i] !== s[start] => s[1] !== s[0] => chay vao if
    - appear = i - start = 1 - 0 = 1
    - while (appear > 0 => 1 > 0)
        - res = res + appear = 8 + 1 = 9
        - appear - 1 = 1 - 1 = 0
    - Ket thuc while
    - start = i = 1 