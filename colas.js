
class Colas{

    constructor(){
        this.cola = [];     //Arreglo
        this.tamanio = 0;   //Variable
    }

    encolar(dato){
        this.cola.push(dato);
        this.tamanio++;
    }
    
    desencolar(){
        this.cola.shift();
        this.tamanio--;
    }

    primerDato(){
        return this.cola[0];
    }

    vacia(){
        if (!this.tamanio){
            return "La cola está vacía";
        } else {
            return "La cola no está vacía, contiene almenos 1 dato";
        }
    }

    getTamanio(){
        return this.tamanio;
    }

    imprimir(){
        return this.cola;
    }
}

const cola = new Colas();

cola.encolar("1");
cola.encolar("2");
cola.encolar("3");

console.log(cola);

cola.desencolar();

console.log(cola);

console.log(cola.primerDato());

console.log(cola.vacia());

console.log(cola.getTamanio());

console.log(cola.imprimir());

console.log(cola);
