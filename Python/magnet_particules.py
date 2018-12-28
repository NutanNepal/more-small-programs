def doubles(maxk, maxn):
    total = 0
    for k in range (1, maxk + 1):
        for n in range(1, maxn + 1):
            j = k*(n + 1)**(2*k)
            total += (1 / j)
    return total

print(doubles(10, 10000))