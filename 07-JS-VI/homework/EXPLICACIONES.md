# Definiciones basicas de Js
---

## Funciones Callback
---
Las funciones callback son funciones que se pasan como argumentos a otras funciones.

---
### Ejemplo callback:
---
```js
function suma(a, b, callback) {
  callback(a + b);
}
```
