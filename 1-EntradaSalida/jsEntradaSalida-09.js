/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo = parseInt(txtIdSueldo.value);
	let aumento = sueldo * 10 / 100 + sueldo 
	txtIdResultado.value = aumento
	alert("El sueldo final es " + aumento);
}
