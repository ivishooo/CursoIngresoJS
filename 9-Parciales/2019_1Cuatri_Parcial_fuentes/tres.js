function mostrar()
{
    let valorPrecio = parseInt(prompt("Ingrese el precio aqui"));
    let valorDescuento = parseInt(prompt("Ingrese el descuento aqui"));
    let descuento = parseInt(valorPrecio * valorDescuento / 100);
    let total = parseInt(valorPrecio - descuento)
    
    elPrecioFinal.value = total

}
