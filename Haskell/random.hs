--random stuffs / practicing and all, i guess
{-|
    o wow look
    a comment block
-}

main :: IO ()
main = do
    print (wow 80.0)
    print (wow 110.1)
    
wow :: Float -> [Char]
wow marks
    |   marks <= 60     = "Fail"
    |   marks <= 65     = "You get D."
    |   marks <= 70     = "C- is bad too."
    |   marks <= 75     = " C :-("
    |   marks <= 80     = "B"
    |   marks <= 100    = "whatever"
    |   otherwise       = "lol you transcended."

{-|
    7489 -> 789
    71212 -> 7212, 7122
-}

-- LCS :: [Char] -> [Char] -> [Char]
-- LCS a b = c where