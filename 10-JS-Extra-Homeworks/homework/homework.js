// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí:
  const objetoAMatriz = (objeto) => {
    let matriz = [];
    for (let key in objeto) {
      matriz.push([key, objeto[key]]);
    }
    return matriz;
  }
  return objetoAMatriz(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:
  const numberOfCharacters = (string) => {
    let objeto = {};
    for (let i = 0; i < string.length; i++) {
      if (objeto[string[i]]) {
        objeto[string[i]] += 1;
      } else {
        objeto[string[i]] = 1;
      }
    }
    return objeto;
  }
  return numberOfCharacters(string);
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
  const capToFront = (s) => {
    let string = s.toLowerCase();
    let array = string.split("");
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i].toUpperCase()) {
        array2.push(array[i]);
        array2.push(array[i].toLowerCase());
      } else {
        array2.push(array[i]);
      }
    }
    return array2.join("");
  }
  return capToFront(s);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  const asAmirror = (str) => {
    let string = str.split(" ");
    let array = [];
    for (let i = 0; i < string.length; i++) {
      array.push(string[i].split("").reverse().join(""));
    }
    return array.join(" ");
  }
  return asAmirror(str);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
  const capicua = (numero) => {
    let string = numero.toString();
    let array = string.split("");
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
      array2.push(array[i]);
    }
    if (array.join("") === array2.reverse().join("")) {
      return "Es capicua";
    } else {
      return "No es capicua";
    }
  }
  return capicua(numero);
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí:
  const deleteAbc = (cadena) => {
    let string = cadena.toLowerCase();
    let array = string.split("");
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== "a" && array[i] !== "b" && array[i] !== "c") {
        array2.push(array[i]);
      }
    }
    return array2.join("");
  }
  return deleteAbc(cadena);
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:
  const sortArray = (arr) => {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      array.push(arr[i].length);
    }
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i] < array[j]) {
          let aux = array[i];
          array[i] = array[j];
          array[j] = aux;
        }
      }
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (array[i] === arr[j].length) {
          array2.push(arr[j]);
        }
      }
    }
    return array2;
  }
  return sortArray(arr);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:
  const buscoInterseccion = (arreglo1, arreglo2) => {
    let array = [];
    for (let i = 0; i < arreglo1.length; i++) {
      for (let j = 0; j < arreglo2.length; j++) {
        if (arreglo1[i] === arreglo2[j]) {
          array.push(arreglo1[i]);
        }
      }
    }
    return array;
  }
  return buscoInterseccion(arreglo1, arreglo2);  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

