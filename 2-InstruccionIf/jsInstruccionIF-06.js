function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;

    if (edad <= 12){
		alert("Usted es un niño")
	}
	if(edad > 12 && edad <18){
		alert("Usted es un adolecente")
	}
	if (edad >= 18){
		alert("Usted es mayor de edad")
	}
}//FIN DE LA FUNCIÓN