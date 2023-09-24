let number;
let check;
let pow;
let sqrt;

document.getElementById("pow_btn").onclick = function(){
    number = document.getElementById("input_box").value;
    number = Number(number);
    check = Boolean(number);

if(check){
    pow = Math.pow(number,2);
    document.getElementById("my_h1").innerHTML = pow;
}else{
    document.getElementById("my_h1").innerHTML = " Please enter the valid number";
}
}

document.getElementById("sqrt_btn").onclick = function(){
    number = document.getElementById("input_box").value;
    number = Number(number);
    check = Boolean(number);

if(check){
    sqrt = Math.sqrt(number);
    document.getElementById("my_h1"). innerHTML = sqrt.toFixed(2);
}else{
    document.getElementById("my_h1").innerHTML = " Please enter the valid number";
}
}