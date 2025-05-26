import { Figura } from "./figura";

export class Circulo extends Figura{
    radio: number;
    constructor(radio: number){
        super();
        this.radio = radio;
    }

    //si no sabes un significado busca en el archivo de "cuadrado.ts"
    override CalcularArea(): void {
        const area=(this.radio * this.radio)*Math.PI;
        console.log(`El área del circulo con ${this.radio} cm de radio es: ${area} cm²`);
    }
    protected override descripcion(): string {
        return `Hola, soy un círculo, mi radio es de ${this.radio} cm de largo`;
    }
    get Descripcion(): string {
        return this.descripcion();
    }
}