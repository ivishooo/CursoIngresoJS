/*  
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let descuento = prompt("Ingrese el descuento aqui");
	let importe = parseInt(txtIdImporte.value);
	let descuentoFinal = importe * descuento / 100
	txtIdResultado.value = importe - descuentoFinal
	alert("El importe final es " + txtIdResultado.value);
}

