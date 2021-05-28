
export class Todo{//clase que utilizaremos afuera de este arhivo export

    constructor(tarea){//parametro

        this.tarea = tarea; 
        
        this.id = new Date().getTime()//123562 formato del getTime()
        this.completado = false;
        this.creado = new Date();

    }
}