import { Figura } from "./figura";

export class Circulo extends Figura{
    radio: number;
    constructor(radio: number){
        super();
        this.radio = radio;
    }
    override CalcularArea(): void {
        const area=(this.radio * this.radio)*Math.PI;
        console.log(`El área del circulo con ${this.radio} de radio es: ${area}`);
    }
    protected override descripcion(): string {
        return `Hola, soy un círculo, mi radio es de ${this.radio} cm de largo`;
    }
    get Descripcion(): string {
        return this.descripcion();
    }
}