/**Este tod-list va almacenar todos los tudo */

export class TodoList{//siempre utilizando el openCamelCase

    constructor(){
        //arreglo de tudos
        //this.todos = [];
        this.cargarLocalStorage();

    }

    //metodo a utilizar

    nuevoTodo(todo){//este metodo nos ayudara a insertar en el arreglo el tudo que recibo
        this.todos.push(todo);
       this.guardarLocalStorage();


    }
    marcarCompletado(id){

        for(const todo of this.todos){

            //console.log(id, todo.id);

            if(todo.id == id){
                
                todo.completado = !todo.completado;//si lo primero es true la negacion de true es falso o si fuera falso la negacion es false
                this.guardarLocalStorage();
                break;
            }
        }

    }
    eliminarTodo(id){

       this.todos =  this.todos.filter(todo => todo.id != id);
       this.guardarLocalStorage();
    }
   

    eliminarCompletados(){
        this.todos =  this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){
        //con JSON.stringify LE ESTAMOS DICIENDO QUE CONVIERTA ESTE ARREGLO DE TODOS A UN JSON PERFECTO
        localStorage.setItem('todo', JSON.stringify(this.todos));

    }
    cargarLocalStorage(){

        //Antes de trabajar con el localstorage o cargar, se tiene que verificar si ese objecto existe
        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
            
        //     console.log('cargarLocal:', this.todos);
        //     console.log(typeof this.todos)

        // }else{
        //     this.todos = [];
        // }

        this.todos = (localStorage.getItem('todo')) 
                    ?  JSON.parse(localStorage.getItem('todo')) 
                    :  [];

    }

}