function obtenerMayor(x, y) {
    // "x" e "y" son números enteros .
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
  if(x>y){
    return x
  } else { return y }
  
  }
 console.log(obtenerMayor(10,12));  

  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
  if(edad>18){ return "allowed"}
  else {
    return "not allowed"
  }
  } console.log(mayoriaDeEdad(20));

  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status==1){
    return "online"
  }
  else if(status==2){
    return "away"
  }
  else {
    return "offline"
  }
  } console.log(conection(1));
  
  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
  switch (idioma) {
    case "aleman": console.log("guten tag!");
    break;
    case "mandarin": console.log("ni hao!");
    break;
    case "ingles": console.log("hello!");
    break;
    default: console.log("hola"); 
        break;
  }
  } 
  (saludo("aleman"));

  function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch (color) {
        case "blue": console.log("this is blue!");
        break;
        case "red": console.log("this is red!");
        break;
        case "green": console.log("this is green!");
        break;
        case "orange": console.log("this is orange");
        break;
        default: console.log("color not found"); 
            break;
      }
  
  } colors("red")

  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
   console.log((numero==10  || numero ==5)); 
  }
   esDiezOCinco(10)
  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    console.log((numero<50  && numero>20)); 
  }
  estaEnRango(25)

  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
   console.log(numero%1==0);
  } esEntero(10)

  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if(numero%3==0 && numero%5==0){
      console.log("fizzbuzz");
    } else if(numero%3==0 ){
      console.log("fizzbuzz");
    }else if(numero%5==0){
      console.log("buzz");}
     else{
      console.log(numero);
    }
  }
  fizzBuzz(15)
  
  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
   
  }
  
  