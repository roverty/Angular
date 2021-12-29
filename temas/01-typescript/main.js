var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employer = /** @class */ (function () {
    function Employer(nombre) {
        this.nombre = nombre;
    }
    Employer.prototype.saludo = function () {
        console.log('Hola ' + this.nombre);
    };
    return Employer;
}());
var em = new Employer('Rodrigo');
console.log(em);
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(nombre) {
        return _super.call(this, nombre) || this;
    }
    Manager.prototype.mandar = function () {
        console.log('Estoy mandando :v');
    };
    return Manager;
}(Employer));
var manager = new Manager('Raul');
manager.mandar();
manager.saludo();
console.log(manager.nombre);
