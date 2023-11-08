"""
2849. Determine if a Cell Is Reachable at a Given Time

Example 1:

    Input: sx = 2, sy = 4, fx = 7, fy = 7, t = 6
    Output: true
    Explanation: Starting at cell (2, 4), we can reach cell (7, 7) in exactly 6 seconds by going through the cells depicted in the picture above. 

Example 2:
    Input: sx = 3, sy = 1, fx = 7, fy = 3, t = 3
    Output: false
    Explanation: Starting at cell (3, 1), it takes at least 4 seconds to reach cell (7, 3) by going through the cells depicted in the picture above. Hence, we cannot reach cell (7, 3) at the third second.


"""


class Solution:
    def isReachableAtTime(self, sx: int, sy: int, fx: int, fy: int, t: int) -> bool:
        x_distance = abs(sx-fx)
        y_distance = abs(sy-fy)
        
        min_dist = min(x_distance,y_distance) + abs(y_distance - x_distance)
        if min_dist == 0: 
            if t == 1:
                return False
            else:
                return True
        return t >= min_dist