import Data.List
import Data.Ord

main :: IO()
main = do
    let s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
        s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
    print (strings_mix s1 s2)

strings_mix :: [Char] -> [Char] -> [Char]
strings_mix s1 s2 = mixer chars_s1 chars_s2 where
    chars_s1 = count_chars s1
    chars_s2 = count_chars s2

count_chars :: [Char] -> [(Char, Int)]
count_chars str = sortBy (comparing $ (snd)) [ (x, n) |
    x <- ['a'..'z'], x `elem` str,
    let n = sum [if y `elem` str then 1 else 0 | y <- str, y == x ],
    n > 1 ]

mixer :: [(Char, Int)] -> [(Char, Int)] -> [Char]
mixer s1 [] = mix 1 s1
mixer [] s2 = mix 2 s2
mixer s1@[_ : (ch1, int1)] s2@[_ : (ch2, int2)]
    |   int1 < int2 = "2:" ++ (take int2 (repeat ch2)) ++ "/" ++ (mixer s1 (init s2))
    |   int1 > int2 = "1:" ++ (take int1 (repeat ch1)) ++ (mixer (init s1) s2)
    |   int1 == int2 = ":=" ++ (take int1 (repeat ch1)) ++ (mixer (init s1) (init s2))

--mix :: Int -> [(Char, Int)] -> [Char]
--mix x chars = 