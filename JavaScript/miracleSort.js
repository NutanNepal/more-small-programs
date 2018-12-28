const miracleSort = arr => {
    var result = [...arr]
    var sorted = false
    do {
        sorted = true
        for (var i = 1; i < result.length; ++i)
            if (result[i] < result[i - 1]) {
                sorted = false
                break
            }
    }
    while (!sorted)
    return result
}

let newMiracleSort = new Function(
    "arr",
    miracleSort.toString()
    .replace("sorted = true", "var sorted = true;\n"+
            "\t\tfor (var i = 0; i < result.length - 1; i++) {\n"+
                "\t\t\tif (result[i] > result[i + 1]) {\n"+
                    "\t\t\t\ttemp = result[i];\n"+
                    "\t\t\t\tresult[i] = result[i + 1];\n"+
                    "\t\t\t\tresult[i + 1] = temp;\n"+
                "\t\t\t}\n"+
            "\t\t}"
    )
    .replace("arr => {", "") // remove everything up to and including the first curly bracket
    .replace(/}[^}]*$/i, "") // remove last curly bracket and everything after
);
console.log(newMiracleSort([2,3,6,4,7,5,1]));