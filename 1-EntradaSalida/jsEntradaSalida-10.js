/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = parseInt(txtIdImporte.value);
	let descuento = importe * 25 / 100
	txtIdResultado.value = importe - descuento
	alert("El importe final es " + txtIdResultado.value);
}
