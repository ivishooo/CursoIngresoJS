/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;
var numeroRandom;

function comenzar()
{
  numeroRandom = parseInt(Math.floor(Math.random() * 101));
  numeroSecreto = numeroRandom;
  
  console.log(numeroRandom)
  console.log(numeroSecreto)
}

function verificar()
{
  contadorIntentos ++;
  txtIdIntentos.value = contadorIntentos;
	if(txtIdNumero.value == numeroSecreto)
  {
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos")
  }
  else 
  {
    if(txtIdNumero.value < numeroSecreto)
    {
      alert("falta…")
    }
    else 
    {
      alert("se pasó…")
    }
  }
}