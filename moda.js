const lista1 = [
    1,
    2,
    3,
    4,
    1,
    2,
    3,
    1
];

const calcularModa = (lista)=>{
    const listCount = {};

    lista.map((elemento)=>{
        if(listCount[elemento]){
            listCount[elemento] += 1;
        }else{
            listCount[elemento] = 1;
        }
    })

    const listCountArray = Object.entries(listCount).sort((a,b)=>{
        return a[1]-b[1];
    });

    const moda = listCountArray[listCountArray.length-1];

    return moda;

} 

console.log(calcularModa(lista1));

