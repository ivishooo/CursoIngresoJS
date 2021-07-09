/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar() {
    let precio1 = parseFloat(txtIdPrecioUno.value);
    let precio2 = parseFloat(txtIdPrecioDos.value);
    let precio3 = parseFloat(txtIdPrecioTres.value);

    resultado = parseFloat(precio1 + precio2 + precio3)
    alert("El resultado de la suma es " + resultado)
}
function Promedio() {
    let precio1 = parseFloat(txtIdPrecioUno.value);
    let precio2 = parseFloat(txtIdPrecioDos.value);
    let precio3 = parseFloat(txtIdPrecioTres.value);

    resultadoSuma = parseFloat(precio1 + precio2 + precio3)

    promedio = parseFloat(resultadoSuma / 3)
    alert("El promedio es " + promedio)
}
function PrecioFinal() {
    let precio1 = parseFloat(txtIdPrecioUno.value);
    let precio2 = parseFloat(txtIdPrecioDos.value);
    let precio3 = parseFloat(txtIdPrecioTres.value);

    resultadoSuma = parseFloat(precio1 + precio2 + precio3)
    calculoIva = parseFloat(resultadoSuma * 21 / 100)
    total = parseFloat(resultadoSuma + calculoIva)
    alert("El resultado + IVA es " + total)
}