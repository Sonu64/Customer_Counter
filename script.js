let count = 0;
let countElement = document.getElementById("countEl");
let saveElement  = document.getElementById("saveElement");

function increment() {
    count++;
    countElement.innerText = count;
}

function save() {
    saveElement.innerText +=  " " + count + " -  ";
    reset();
}

function reset() {
    count = 0;
    countElement.innerText = count;
}




