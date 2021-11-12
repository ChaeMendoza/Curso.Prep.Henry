# Definicioes basicas de JS
---
## Objetos
---
Los objetos son colecciones de propiedades. 
### Ejemplo:
```js
var objeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    propiedad3: valor3
}
```
---
### Propiedades
---
Las propiedades son una clave y un valor.
### Ejemplo:
```js
var objeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    propiedad3: valor3
}
```
---
### Métodos
---
Los métodos son funciones que se pueden ejecutar sobre un objeto.
### Ejemplo:
```js
var objeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    propiedad3: valor3,
    metodo1: function(){
        // código
    },
    metodo2: function(){
        // código
    }
}
```
---
## Bucle "for in"
---
El bucle "for in" se utiliza para recorrer todas las propiedades de un objeto.
### Ejemplo:
```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```
---
## Notación de puntos vs notación de corchetes
---
La notación de puntos es más sencilla y más fácil de entender.
La notación de corchetes es más compleja y más compleja de entender.
### Ejemplo de notación de puntos:
```js
var objeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    propiedad3: valor3,
    metodo1: function(){
        // código
    },
    metodo2: function(){
        // código
    }
}
```
### Ejemplo de notación de corchetes:
```js
var objeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    propiedad3: valor3,
    metodo1: function(){
        // código
    },
    metodo2: function(){
        // código
    }
}
```


