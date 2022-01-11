const lista1 = [
    100,
    200,
    300,
    500
];

const calcularMediaAritmetica = (lista)=>{

    // let sumLista = 0;

    // for (let index = 0; index < lista.length; index++) {
    //     sumLista = sumLista + lista[index];
    // }

    const sumaLista = lista.reduce(
        (valorAcumulado = 0,element)=>{
            console.log(element);
            console.log(valorAcumulado);
            return valorAcumulado + element;
        }
    );
    
    const promLista = sumaLista/lista.length;

    return promLista;

};

console.log(calcularMediaAritmetica(lista1))