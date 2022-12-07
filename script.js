window.onload = start();
var counter = 0;
function start(){
    var add5 = make_adder(5);
    add5();
    add5();
    console.log(add5());

    reset();
    var add7 = make_adder(7);
    add7();
    add7();
    console.log(add7());
}

function add(){
    return function returnf(){
        return counter=+1;
    }
}

function reset(){
    return function returnf(){
        counter = 0;
    }
}

function make_adder(inc){
    counter = 0;
    return function returnf(){
        return counter= counter+inc;
    }
}