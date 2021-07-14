function mostrar()
{
	let nota = Math.floor(Math.random() * 11);

	if (nota == 9 | nota == 10){
		alert("EXCELENTE")
	}else {
		if (nota >= 4 && nota < 9){
			alert("APROBÓ")
		}else{
			alert("Vamos, la proxima se puede")
		}
	}
}//FIN DE LA FUNCIÓN