# Definiciones basicas de JS
---
## Prototype
---
Prototype es una propiedad de un objeto que contiene una referencia a un objeto.

### Ejemplo usando prototype:
```js
var miObjeto = { foo: 5 } 
console.log(miObjeto.foo);
```
--- 
## Constructor
---
El constructor es una funcion que se ejecuta cuando se crea un nuevo objeto.

### Ejemplo usando constructor:
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```
