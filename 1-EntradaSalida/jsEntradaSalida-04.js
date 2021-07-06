/* Ivan Otero DIV H 
EJERCICIO E/S 4

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado = prompt("Ingrese su nombre");
	let objetInput = document.getElementById("txtIdNombre")
	objetInput.value = 'Su nombre es ' + nombreIngresado
	
	
}
