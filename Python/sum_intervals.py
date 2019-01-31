def getsumintervals (inp_arr):
    return len(set([x for y in inp_arr for x in range (y[0], y[1])]))

print(getsumintervals([[1,4], [3, 9], [5, 10], [12, 14], [13, 15]]))