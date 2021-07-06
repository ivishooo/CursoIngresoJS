/*Ivan Otero DIV H
Ejecicio E/S 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado = document.getElementById("txtIdNombre").value;
	let edadIngresada = document.getElementById("txtIdEdad").value;

	alert("Su nombre y edad es " + nombreIngresado + " " + edadIngresada)
}

