"use strict";
exports.__esModule = true;
exports.casa = void 0;
var casa = /** @class */ (function () {
    function casa(abitaciones, dormitorios, cuartoDeBanios, cocinas) {
        this.abitaciones = abitaciones;
        this.dormitorios = dormitorios;
        this.cuartoDeBanios = cuartoDeBanios;
        this.cocinas = cocinas;
        this.maxOcupantes = dormitorios * 2;
    }
    casa.prototype.mostrar = function () {
        console.log("Abitaciones: " + this.abitaciones + ", dormitorios: " + this.dormitorios + ", cuartos de ba\u00F1o: " + this.cuartoDeBanios + ", cocinas: " + this.cocinas + ", maximo de ocupantes: " + this.maxOcupantes);
    };
    return casa;
}());
exports.casa = casa;
