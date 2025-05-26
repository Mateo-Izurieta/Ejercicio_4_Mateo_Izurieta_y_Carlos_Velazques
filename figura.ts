//export significa que esa clase se puede llevar a otros documentos si se importa
//abstract significa que "Figura" no es una clase como tal, ya que sus funciones pueden ser abstractas, no tener informacion pero dice que sus deribados si deben tenerlo
//protected dice que la funcion descripcion no es publica, que esta protegida como si fuera un private

export abstract class Figura{
    abstract CalcularArea():void;
    protected descripcion(): string {
        return `Hola, soy...`;
    }
    get Descripcion(): string {
        return this.descripcion();
    }
}