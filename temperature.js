"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
// Clase Medida
function Medida (valor, tipo) {
  this.valor_ = valor;
  this.tipo_ = tipo;
}

// Clase Temperatura
function Temperatura (valor, tipo) {
  Medida.call(this, valor, tipo);
}

//Temperatura hereda de Medida.
Temperatura.prototype = new Medida();
