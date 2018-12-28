const defuser = x => {
    check();
    return (x == 42)? true: false;
};

function check(){
    console.log("=> this is check;");
}

Dict = {
    key: 42,
    defuse: defuser,
    whatevs: 'lol'
};

console.log(Dict.defuse(42));
console.log(Dict.defuse.toString());
console.log(Dict.defuse.call(42));