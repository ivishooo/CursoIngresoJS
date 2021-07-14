/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    let precioUnitario = 35;
    let precio = parseInt(precioUnitario * cantidadLamparas);
    let valorMarca = Marca.value;
    let iva;
    let descuento;
    let total;

    if (cantidadLamparas >= 6) 
    {
        descuento = (precio * 50) / 100
    } 
    else 
    {
        if (cantidadLamparas == 5 && valorMarca == "ArgentinaLuz") 
        {
            descuento = (precio * 40) / 100
        } 
        else  
        {
            if (cantidadLamparas == 5 && valorMarca != "ArgentinaLuz")
            {
                descuento = (precio * 30) / 100
            }
            else 
            {
                if (cantidadLamparas == 4 && valorMarca == "ArgentinaLuz" | valorMarca == "FelipeLamparas") 
                {
                    descuento = (precio * 25) / 100
                }
                 else 
                 {
                    if (cantidadLamparas == 4 && valorMarca != "ArgentinaLuz" | valorMarca != "FelipeLamparas")
                    {
                        descuento = (precio * 20) / 100
                    } 
                    else 
                    {
                        if(cantidadLamparas == 3 && valorMarca == "ArgentinaLuz")
                        {
                            descuento = (precio * 15) / 100
                        }
                        else 
                        {
                            if(cantidadLamparas == 3 && valorMarca == "FelipeLamparas")
                            {
                                descuento = (precio * 10) / 100
                            }
                            else 
                            {
                                if(cantidadLamparas == 3 && valorMarca != "ArgentinaLuz" | valorMarca != "FelipeLamparas")
                                {
                                    descuento = (precio * 5) / 100
                                }
                            }
                        }
                    }
                }
            }
        } 
       
    }
    total = precio - descuento
    iva = precio * 10 / 100
    if(total > 120)
    {
        total + iva
        alert("IIBB Usted pago " + total + ", siendo " + iva + " el impuesto que se pagó.")
    }
    txtIdprecioDescuento.value = total
}
