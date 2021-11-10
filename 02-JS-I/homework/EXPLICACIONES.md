# CONCEPTOS BÁSICOS DE JS

---
## Variables
Son lugares de almacenamiento donde se puede guardar un valor.En JavaScript, las variables se definen con la palabra reservada var. Aunque podemos usar la palabra reservada let en lugar de var, es una mejor opción. También podemos usar const para declarar variables que no pueden ser modificadas.

## Ejemplo de Variables
var nombre = "Juan";
let apellido = "Perez";
const edad = 23;

---
## String
Un string es una secuencia de caracteres. Los strings se pueden definir con comillas simples o dobles.

## Ejemplo de String
var nombre = "Juan";

Dentro de las comillas se guarda el valor de texto, quiere decir que si guradamos un número dentro de comillas esto automaticamente lo convertirá en un string. Todo lo que esté dentro de las comillas se considera un string.

---
## Funciones (Argumentos, returns)
Las funciones son bloques de código que se ejecutan cuando se llaman. Las funciones pueden recibir argumentos y devolver valores.

## Ejemplo de Funciones
function suma(num1, num2) {
  return num1 + num2;
}

En esta funcion estamos sumando dos números y devolviendo el resultado.

---
## Declaraciones If
Las declaraciones if son una forma de controlar el flujo de ejecución de un programa.

## Ejemplo de If
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

En este ejemplo estamos comparando la edad con 18, si es mayor o igual a 18, entonces se ejecuta el código dentro del if, si no, se ejecuta el else.

## Valores booleanos
Los valores booleanos son valores que pueden ser true o false.

## Ejemplo de Valores booleanos
var ejemplo = true;
var ejemplo2 = false;

