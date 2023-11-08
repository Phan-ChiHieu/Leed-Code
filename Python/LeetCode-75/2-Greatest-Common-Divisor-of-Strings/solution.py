"""
Example 1:

    Input: str1 = "ABCABC", str2 = "ABC"
    Output: "ABC"

Example 2:

    Input: str1 = "ABABAB", str2 = "ABAB"
    Output: "AB"

Example 3:

    Input: str1 = "LEET", str2 = "CODE"
    Output: ""
 
"""

str1 = "ABCABC"
str2 = "ABC"

class Solution: 
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""
        from math import gcd
        return str1[:gcd(len(str1), len(str2))]
    

print(Solution.gcdOfStrings('',str1, str2))   