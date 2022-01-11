const lista1 = [
    40000000,
    100,
    200,
    500,
    10000000000,
    600
    
];

const calcularMediana = (lista)=>{

    const listaOrdenada = lista.sort((a, b) => a - b);

    const mitadList = parseInt(listaOrdenada.length / 2);

    const esPar = (numero)=>{
        if(numero % 2 === 0){
            return true;
        }else{
            return false;
        }
    }

    let mediana;

    if(esPar(listaOrdenada.length)){
        const element1 = listaOrdenada[mitadList - 1];
        const element2 = listaOrdenada[mitadList];
        const prom = calcularMediaAritmetica([element1,element2]);
        mediana = prom;
    }else{
        mediana = listaOrdenada[mitadList];
    }

    return mediana;

}

const calcularMediaAritmetica = (lista)=>{

    const sumaLista = lista.reduce(
        (valorAcumulado = 0,element)=>{
            return valorAcumulado + element;
        }
    );
    
    const promLista = sumaLista/lista.length;
    return promLista;

};

console.log(calcularMediana(lista1));


