import { Figura } from "./figura";
import { Cuadrado } from "./cuadrado";
import { Circulo } from "./circulo";

const cuadradito = new Cuadrado(5);
cuadradito.CalcularArea();
console.log(cuadradito.Descripcion);

const circulito = new Circulo(6);
circulito.CalcularArea();
console.log(circulito.Descripcion);