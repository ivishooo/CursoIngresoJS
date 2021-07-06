/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	
	let numeroUno = parseInt(txtIdNumeroUno.value);
    let numeroDos = parseInt(txtIdNumeroDos.value);
	let resultado = numeroUno + numeroDos;
	alert("La suma da " + resultado);

}

function restar()
{
	let numeroUno = parseInt(txtIdNumeroUno.value);
    let numeroDos = parseInt(txtIdNumeroDos.value);
	let resultado = numeroUno - numeroDos;
	alert("La resta da " + resultado);
}

function multiplicar()
{ 
	let numeroUno = parseInt(txtIdNumeroUno.value);
    let numeroDos = parseInt(txtIdNumeroDos.value);
	let resultado = numeroUno * numeroDos;
	alert("La multiplicacion da " + resultado);
}

function dividir()
{
	let numeroUno = parseInt(txtIdNumeroUno.value);
    let numeroDos = parseInt(txtIdNumeroDos.value);
	let resultado = numeroUno / numeroDos;
	alert("La division da " + resultado);
}

