let counter = 0;
document.getElementById("counting").innerText = counter;

function subtract(){
    if(counter>0){
        counter--;
        document.getElementById("counting").innerText = counter;
    }else{
        counter=0;
    }
}
function add() {
    counter++;
    document.getElementById("counting").innerText = counter ;
}

document.getElementById("year").innerText = new Date().getFullYear();