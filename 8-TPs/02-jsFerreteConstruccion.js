/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno = parseFloat(txtIdLargo.value);
    let anchoTerreno = parseFloat(txtIdAncho.value);
    
    let perimetroRectangulo = parseFloat((largoTerreno * 2) + (anchoTerreno * 2))
    let rectanguloAlambre = parseFloat(perimetroRectangulo * 3);
    alert("La cantidad de alambre a comprar es: " + rectanguloAlambre)
}
function Circulo () 
{
	let radioTerreno = parseFloat(txtIdRadio.value);
    let diametro = radioTerreno * 2;
    let perimetro = Math.PI * diametro;
    let totalAlambre = Math.ceil(perimetro * 3);
    alert("Se necesitan " + totalAlambre + " para cubrir el terreno")
}
function Materiales () 
{
    let largoTerreno = parseFloat(txtIdLargo.value);
    let anchoTerreno = parseFloat(txtIdAncho.value);
    
    let area = parseFloat(largoTerreno * anchoTerreno);
    let bolsasCemento = parseFloat(area * 2);
    let bolsasCal = parseFloat(area * 3);
    alert("La cantidad de bolsas a comprar es: " + bolsasCemento + " de cemento y " + bolsasCal + " de cal")
}