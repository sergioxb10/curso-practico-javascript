// const precioOriginal = 100;
// const descuento = 15;

const porcentajePrecioConDescuento = (descuento)=>{
    let porcentajePrecioConDescuento = 100 - descuento;
    return porcentajePrecioConDescuento;
}

const precionConDescuento = (precioOriginal,descuento)=>{ 
    let precionConDescuento = (precioOriginal * porcentajePrecioConDescuento(descuento)) / 100;
    return precionConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precionConDescuento
// })

function calcularPrecioConDescuento(){
    const precio = document.getElementById("precio");
    const precioValor = precio.value;
    const descuento = document.getElementById("descuento");
    const descuentoValor = descuento.value;
    const precioConDescuento = precionConDescuento(precioValor,descuentoValor);
    const respuestaPrecioConDescuento = document.getElementById("resultadoPrecio");
    respuestaPrecioConDescuento.innerHTML = `El precio con descuento es $${precioConDescuento}`;
}