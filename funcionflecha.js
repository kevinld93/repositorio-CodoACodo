// function suma(x, y) {
//     // "x" e "y" son números
//     // Suma "x" e "y" juntos y devuelve el valor
//     // Tu código:
//    return x+y;
   
//   }
//   suma(2,10)
  const suma=(x,y)=>(x+y)
 console.log(suma(2,3))
//   function resta(x, y) {
//     // Resta "x" de "y" y devuelve el valor
//     // Tu código:
//   return x-y
const resta=(x,y)=>(x-y)
console.log(resta(2,3))
//   }
//   resta(20,12)
  
//   function multiplica(x, y) {
//     // Multiplica "x" por "y" y devuelve el valor
//     // Tu código:
//     console.log(x*y)
  
//   }
//   multiplica(2,3)
const multiplicacion=(x,y)=>(x*y)
console.log(multiplicacion(2,6)); 
  
//   function divide(x, y) {
//     // Divide "x" entre "y" y devuelve el valor
//     // Tu código:
//     return x/y;
  
//   }
//   divide(2,2)
const divide=(x,y)=>(x/y)
console.log(divide(6,2)); 
//   function sonIguales(x, y) {
//     // Devuelve "true" si "x" e "y" son iguales
//     // De lo contrario, devuelve "false"
//     // Tu código:utilizar if y else
//     if (x==y){console.log(true);
//     } else { console.log (false)
//   }}
//   sonIguales(23,23)
const sonIguales = (x, y) => x === y;

console.log(sonIguales(2, 2)); // devuelve true

//   function tienenMismaLongitud(str1, str2) {
//     // Devuelve "true" si las dos strings tienen la misma longitud
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     if (str1.length==str2.length){
//      console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
//   tienenMismaLongitud("hola","hola")
   const tienenMismaLongitud=(str1,str2)=>str1===str2
   console.log(tienenMismaLongitud("hola","hola"));
//   function menosQueNoventa(num) {
//     // Devuelve "true" si el argumento de la función "num" es menor que noventa
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     if (num<90){ return true
//   } else return false
//   }
//   menosQueNoventa(10)
  const menosQueNoventa=(num)=>num<90
  console.log(menosQueNoventa(10))
//   function mayorQueCincuenta(num) {
//     // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
//     // De lo contrario, devuelve "false"
//     // Tu código:
//   if(num>50){
//     return true
//   } else{return false
//   }}
//   mayorQueCincuenta(5)
  const mayorQueCincuenta=(num)=>num<50
  console.log(mayorQueCincuenta(5));
//   function obtenerResto(x, y) {
//     // Obten el resto de la división de "x" entre "y"
//     // Tu código:
//   return x%y
  
//   }
 const obtenerResto=(x,y)=>x%y
 console.log(obtenerResto(4,2));
//   obtenerResto(10,10)
  
//   function esPar(num) {
//     // Devuelve "true" si "num" es par
//     // De lo contrario, devuelve "false"
//     // Tu código:
//   if(num%2==0){return true}
//   else{return true
//   }}
//   esPar(20)
  
//   function esImpar(num) {
//     // Devuelve "true" si "num" es impar
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     if(num%2!=0){return true}
//     else{return false
//     }}
//   esImpar(21)
  
//   function elevarAlCuadrado(num) {
//     // Devuelve el valor de "num" elevado al cuadrado
//     // ojo: No es raiz cuadrada!
//     // Tu código:
//     return num*num
  
//   }
//   elevarAlCuadrado(4)
  
//   function elevarAlCubo(num) {
//     // Devuelve el valor de "num" elevado al cubo
//     // Tu código:
//   return (num*num)*num
//   }
//   elevarAlCubo(3)
  
//   function elevar(num, exponent) {
//     // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//     // Tu código:
//   return(Math.pow(num, exponent));
    
//   }
//   elevar(2,3)
  
//   function redondearNumero(num) {
//     // Redondea "num" al entero más próximo y devuélvelo
//     // Tu código:
//    console.log(Math.round(num));
//   }
//   redondearNumero(5.5)
//   function redondearHaciaArriba(num) {
//     // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
//     // Tu código:
//   console.log(Math.ceil(num))
//   }
//   redondearHaciaArriba(9.1)
  
//   function numeroRandom() {
//     //Generar un número al azar entre 0 y 1 y devolverlo
//     //Pista: investigá qué hace el método Math.random()
//    return(Math.random())
//   }
//    numeroRandom()
  
//   function esPositivo(numero) {
//     //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//     //Si el número es positivo, devolver ---> "Es positivo"
//     //Si el número es negativo, devolver ---> "Es negativo"
//     //Si el número es 0, devuelve false
//    if(numero>0){return("es positivo")}
//    else{return("Es negativo")}
//   }
//   esPositivo(-5)
  