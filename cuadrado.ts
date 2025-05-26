import { Figura } from "./figura";
//se esta importando figura

export class Cuadrado extends Figura{
    lado: number;
    constructor(lado: number){
        //se pone super porque Cuadrado es subclase de figura, para que no de error se lo deja en vacio ya que lo pide typescript, es obligatorio
        super();
        this.lado = lado;
    }

    //el override es lo que se llama "polimorfismo", es decir reutiliza una funcion y la sobreescribe dependiendo para quien se usara
    override CalcularArea(): void {
        const area=this.lado * this.lado;
        console.log(`El área del cuadrado con ${this.lado} cm en sus lados es: ${area} cm²`);
    }

    //protected es similar a privade, lo unico es que protected puede ser llamado desde subclases,y privade solo desde la misma clase
    protected override descripcion(): string {
        return `Hola, soy un cuadrado, mis lados son de ${this.lado} cm de largo`;
    }
    get Descripcion(): string {
        return this.descripcion();
    }
}