//helper o utils

const salariosCol = colombia.map((element)=>{
    return element.salary;
})

const salariosColOrdenado = salariosCol.sort((a,b)=>{
    return a-b;
})

const esPar = (numero)=>{
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
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

// calcular mediana general
const calcularMediana = (lista)=>{

    const listaOrdenada = lista.sort((a, b) => a - b);

    const mitadList = parseInt(listaOrdenada.length / 2);

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

const medianaCol = calcularMediana(salariosColOrdenado);

// calcular mediana del top 10
const spliceStart = parseInt((salariosColOrdenado.length * 90)/100);
const spliceCount = salariosColOrdenado.length - spliceStart;

const salarioColTop10 = salariosColOrdenado.splice(spliceStart,spliceCount);

const medianaColTop10 = calcularMediana(salarioColTop10);

console.log({
    medianaCol,
    medianaColTop10
})