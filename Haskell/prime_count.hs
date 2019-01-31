import Data.List
main :: IO()
main = print (decompose 232)

decompose :: Int -> [Char]
decompose inp = out where
    decom = [ [n, m] | 
        n <- [ 1,2..(((floor.(sqrt :: Double -> Double).abs.fromIntegral) inp)::Int) + 1 ],
        inp `rem` n == 0, m <- [quot inp n ] ]
    nodups = (tail.sort.nub.concat) decom
    out = "abc"