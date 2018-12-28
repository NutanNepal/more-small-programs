main :: IO()
main = print fibb 1000

fibb :: Integer -> Integer
fibb n
    |   n < 0 = ((-1)^(n `rem` 2 + 1)) * fibb (-n)
    |   otherwise = out where
            let x = 0
                a = b = 0
                c = y = 1