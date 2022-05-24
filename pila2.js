class pila{

constructor(){

this.items={};//se usa para almacenar la informaciòn que tendremos en nuestra pila, 
this.top=0;//para tomar el ultimo dato que ha entrado a la pila.
};

push(data){//Implementamos el metodo push que recibira un argumento 

this.top++;//Aumentamos el top de la pila
this.items[this.top] = data;//Introducir el elemento que nosotros queramos en this.items en el valor de this.top
}

pop(){//Implementamos el metodo pop 

let deleteData;//Creamos una variable que sera la que sacara la informaciòn de la pila

if(this.top !== 0){//Creamos una condicional
deleteData = this.items[this.top];
delete this.items[this.top];//Eliminar el valor que hay en la variable this.items.
this.top--; //Va a disminuir un valor por que se esta eliminando.
return deleteData;
}
}

getSize(){//Devolvera el tamaño de la pila

return this.top;
}

isEmpty(){//Nos permitira saber si la pila esta vacia o no

    if(!this.getSize()){
    return true;
    }else{
    return false;
    }
}

peek(){//Nos devolvera el valor siguiente de la pila sin sacarlo
if(!this.getSize()){//verificar si la lista esta vacia 

    return null;
}

return this.items[this.top];//sera el siguiente valor en salir
}


}

const stack = new pila();//Instanciamos una nueva variable 

stack.push('plato1');//Mandamos llamar el metodo push e introducimos un dato
stack.push('plato2');
stack.push('plato3');
stack.push('plato 4');

console.log(stack.pop());//Elimina el ultimo elemento

console.log(stack);

console.log(stack.getSize());

console.log(stack.isEmpty());

console.log(stack.peek());

