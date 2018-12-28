{-|

main :: IO()
main = print doubles(1, 10)

doubles :: Int -> Int -> [Float]
doubles x y = [(1::Float)/((k::Float)*(n + 1)^(2*k)) | k <- [1..x], n <- [1..y]]

-}