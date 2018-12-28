n = 567892353412345098760

b = list(map(int, str(n)))
b.remove(min(b))
print((''.join(list(map(str, b)))))