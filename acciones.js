var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var divi = document.getElementById("divi");
var multi = document.getElementById("multi");
var igual = document.getElementById("igual");
var msg = document.getElementById("mensaje");
var borrar = document.getElementById("borra");
var num1 = 0;
var num2 = 0;
var signo = "";

function boton(n) {
  console.log("El numero es " + n);
  msg.value += n;
}

function calculo(m) {
  console.log("La operacion es " + m);
  num1 = parseInt(msg.value);
  msg.value = "";
  signo = m;
}

function resultado() {
  num2 = parseInt(msg.value);
  switch (signo) {
    case "+":
      num3 = num1 + num2;
      break;
    case "-":
      num3 = num1 - num2;
      break;
    case "*":
      num3 = num1 * num2;
      break;
    case "/":
      num3 = num1 / num2;
      break;
  }
  msg.value = num3;
  console.log("El resultado es " + num3);
}

borrar.onclick = function () {
  suma.value = "";
  resta.value = "";
  divi.value = "";
  multi.value = "";
  igual.value = "";
  msg.value = "";
  console.log("Se a borrado ");
};
