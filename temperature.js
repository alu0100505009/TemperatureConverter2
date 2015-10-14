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

// Getters y Setters
Medida.prototype.get_valor = function(){return this.valor_;}

Medida.prototype.get_tipo = function(){return this.tipo_;}

Medida.prototype.set_valor = function(valor){this.valor_ = valor;}

Medida.prototype.set_tipo = function(tipo){this.tipo_ = tipo;}
