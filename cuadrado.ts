import { Figura } from "./figura";

export class Cuadrado extends Figura{
    lado: number;
    constructor(lado: number){
        super();
        this.lado = lado;
    }
    override CalcularArea(): void {
        const area=this.lado * this.lado;
        console.log(`El área del cuadrado con ${this.lado} cm en sus lados es: ${area}`);
    }
    protected override descripcion(): string {
        return `Hola, soy un cuadrado, mis lados son de ${this.lado} cm de largo`;
    }
    get Descripcion(): string {
        return this.descripcion();
    }
}