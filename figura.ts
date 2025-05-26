export abstract class Figura{
    abstract CalcularArea():void;
    protected descripcion(): string {
        return `Hola, soy...`;
    }
    get Descripcion(): string {
        return this.descripcion();
    }
}