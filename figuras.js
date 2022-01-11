/*// Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`los lados del cuadrado son ${ladoCuadrado}cm`);
const perimetroCuadrado = ()=>{ ladoCuadrado * 4;
console.log(`el perimetro del cuadrado es ${perimetroCuadrado}cm`);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`el area del cuadrado es ${areaCuadrado}cm2`);
console.groupEnd();

// triangulo
console.group("Triangulo");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 5;
const alturaTriangulo = 5.5;
console.log(`los lados del triangulo son ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
console.log(`la altura del triangulo es ${alturaTriangulo}cm`);
const perimetrotriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`el perimetro del triangulo es ${perimetrotriangulo}cm`);
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`el area del triangulo es ${areaTriangulo}cm2`);
console.groupEnd();

// circulo
console.group("Circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
//const PI = 3.1415;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`EL radio de circulo es ${radioCirculo}cm, el diametro es ${diametroCirculo}cm y PI es ${PI}`);
console.log(`el perimetro del circulo es ${perimetroCirculo}cm`);
console.log(`el area del circulo es ${areaCirculo}cm2`);
console.groupEnd();*/

//console.group("Cuadrado");
//const ladoCuadrado = 2;
//console.log(`los lados del cuadrado son ${ladoCuadrado}cm`);
const perimetroCuadrado = (lado)=>{ 
    return lado * 4;
}
//console.log(`el perimetro del cuadrado es ${perimetroCuadrado(2)}cm`);
const areaCuadrado = (lado)=>{
    return lado * lado;
}
//console.log(`el area del cuadrado es ${areaCuadrado(2)}cm2`);
//console.groupEnd();

// triangulo
//console.group("Triangulo");
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 5;
// const baseTriangulo = 5;
// const alturaTriangulo = 5.5;
// console.log(`los lados del triangulo son ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
// console.log(`la altura del triangulo es ${alturaTriangulo}cm`);
const perimetrotriangulo = (lado1,lado2,base)=>{
    return lado1 + lado2 + base;
}
//console.log(`el perimetro del triangulo es ${perimetrotriangulo(1,2,3)}cm`);
const areaTriangulo = (baseTriangulo,alturaTriangulo)=>{
    return (baseTriangulo * alturaTriangulo)/2;
}
//console.log(`el area del triangulo es ${areaTriangulo(1,2)}cm2`);
//console.groupEnd();

// circulo
//console.group("Circulo");
//const radioCirculo = 4;
const diametroCirculo = (radio)=>{
    return radio * 2;
}
//const PI = 3.1415;
const PI = Math.PI;
const perimetroCirculo = (radio)=>{ 
    return diametroCirculo(radio) * PI;
}
const areaCirculo = (radio)=>{ 
    return (radio * radio) * PI;
}
// console.log(`EL radio de circulo es ${radioCirculo}cm, el diametro es ${diametroCirculo(2)}cm y PI es ${PI}`);
// console.log(`el perimetro del circulo es ${perimetroCirculo(2)}cm`);
// console.log(`el area del circulo es ${areaCirculo(2)}cm2`);
// console.groupEnd();

//Conexion con  html

function calculaPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calculaAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

