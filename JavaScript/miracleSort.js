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
    .replace("arr => {", "")
    .replace(/}[^}]*$/i, "")
);
//console.log(newMiracleSort.toString());
//console.log(newMiracleSort([2,3,6,4,7,5,1]));
var obj = {};

var dispatch = function (object, method, args) {
    var result = [...args];
    var sorted = false;
    do {
        var sorted = true;
        for (var i = 0; i < result.length - 1; i++) {
            if (result[i] > result[i + 1]) {
                temp = result[i];
                result[i] = result[i + 1];
                result[i + 1] = temp;
            }
        }
        for (var i = 1; i < result.length; ++i)
            if (result[i] < result[i - 1]) {
                sorted = false;
                break;
            }
    }
    while (!sorted);
    return method.apply(object, [result]);
}

//console.log(dispatch(obj, miracleSort, [2,3,6,4,7,5,1]))