function fn0() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 0;
}

function fn1() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 1;
}

function fn2() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 2;
}

function fn3() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 3;
}

function fn4() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 4;
}

function fn5() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 5;
}

function fn6() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 6;
}

function fn7() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 7;
}

function fn8() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 8;
}

function fn9() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + 9;
}

function fnDO() {
    let previous = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = previous + ".";
}

function feraser() {
    let previous = document.getElementById("answer").innerHTML;
    let erasePre = previous.slice(0, -1);
    document.getElementById("answer").innerHTML = erasePre;
}

let op;
let firstsave;

function fnAD() {
    firstsave = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = 0;
    op = 1;
}

function fnMN() {
    firstsave = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = 0;
    op = 2;
}

function fnML() {
    firstsave = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = 0;
    op = 3;
}

function fnDV() {
    firstsave = document.getElementById("answer").innerHTML;
    document.getElementById("answer").innerHTML = 0;
    op = 4;
}

function fnEQ() {
    let secondsave = document.getElementById("answer").innerHTML;
    if (op == 1) {
        document.getElementById("answer").innerHTML = parseFloat (firstsave) + parseFloat (secondsave); 
    }else if(op == 2) {
        document.getElementById("answer").innerHTML = parseFloat (firstsave) - parseFloat (secondsave); 
    }else if (op == 3) {
        document.getElementById("answer").innerHTML = parseFloat (firstsave) * parseFloat (secondsave); 
    }else if (op == 4) {
        document.getElementById("answer").innerHTML = parseFloat (firstsave) / parseFloat (secondsave); 
    } else {
        document.getElementById("answer").innerHTML = "invalid";
    }
}

function fnAC() {
    document.getElementById("answer").innerHTML = "0"
    op = 0;
    firstsave = "0";
    secondsave = "0";
}