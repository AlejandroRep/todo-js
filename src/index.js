import './styles.css';

import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();
console.log(todoList.todos);


todoList.todos.forEach(todo => crearTodoHtml(todo));


//const tarea =  new Todo('Aprender Javascript!!'); //Instancia de la clase "todo"
//todoList.nuevoTodo(tarea)

//console.log(todoList);

//crearTodoHtml(tarea);

//localStorage.setItem('mi-Key','ABC123');

//sessionStorage.setItem('mi-Key','ABC123')

// setTimeout( () => {
// localStorage.removeItem('mi-key');
// }, 1500);

