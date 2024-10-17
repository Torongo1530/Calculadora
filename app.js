let numeros = document.getElementsByClassName("numero")

let operacion = "";
let pantalla = document.getElementById("pantalla");

let num1 = "";
let num2 = "";


for (let i = 0; i < numeros.length; i++) {
    numeros[i].onclick = function () {
        if (operacion === ""){
            num1+= this.textContent;
            pantalla.textContent = num1;
        }
        else{
            num2+=this.textContent;
            pantalla.textContent = `${num1} ${operacion} ${num2}`; 
        }
    }
}

document.getElementById("operacionSuma").onclick = function (){
    operacion = "+";
    pantalla.textContent = `${num1} ${operacion}`; 
}
document.getElementById("operacionResta").onclick = function(){
    operacion = "-";
    pantalla.textContent = `${num1} ${operacion}`;
}
document.getElementById("operacionMultiplicacion").onclick = function(){
    operacion = "x";
    pantalla.textContent = `${num1} ${operacion}`;
}
document.getElementById("operacionDivision").onclick = function(){
    operacion = "/";
    pantalla.textContent = `${num1} ${operacion}`;
}
document.getElementById("operacionPotencia").onclick = function(){
    operacion = "^";
    pantalla.textContent = `${num1} ${operacion}`;
}

document.getElementById("resultado").onclick = function(){
    let res = 0;
    if (operacion === "+"){
        res = parseInt(num1) + parseInt(num2);
    }
    else if (operacion === "-"){
        res = parseInt(num1) - parseInt(num2);
    }
    else if (operacion === "x"){
        res = parseInt(num1) * parseInt(num2);
    }
    else if (operacion === "/"){
        res = parseInt(num1) / parseInt(num2);
    }
    else if (operacion === "^"){
        res = parseInt(num1) ** parseInt(num2);
    }
    pantalla.textContent = res;
}

document.getElementById("borrarTodo").onclick = function(){
    num1 = "";
    num2 = "";
    operacion = "";
    pantalla.textContent = 0;
}













