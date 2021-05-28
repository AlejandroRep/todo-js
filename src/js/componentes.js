
import {Todo} from '../classes';
import {todoList} from '../index';


// Referencias en el HTML
const divTodoList 	=  document.querySelector('.todo-list');
const txtInput 		=  document.querySelector('.new-todo'); //referencia al input 
const btnBorrar 	=  document.querySelector('.clear-completed'); //referencias del input
const ulFiltros 	= document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');   




export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked': '' }>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div = document.createElement('div');
    div.innerHTML =  htmlTodo;

	//primer div o li que 
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}
//Eventos

/**Evento para agregar un TODO */
txtInput.addEventListener('keyup', (event) => {// el evento addEventListener tomara el evento y lo pone a escuhar en este caso keyup(saltar teccla)

	if(event.keyCode === 13 && txtInput.value.length >0 ){
		console.log(txtInput.value);
		const nuevoTodo =  new Todo(txtInput.value);
		todoList.nuevoTodo(nuevoTodo);
		
		console.log(todoList)

		crearTodoHtml(nuevoTodo); 
		txtInput.value = ''; //input vacio al momento del enter

		
	}


});
//Evento al momento de hacer click
divTodoList.addEventListener('click',(event) =>{

	//console.log('click');
	const nombreElemento = event.target.localName; // imput , label, button
	//referencia al LI
	const todoElemento =  event.target.parentElement.parentElement;
	//extraer el id de elemento creado
	const todId = todoElemento.getAttribute('data-id');

	//console.log(todoElemento);
	//console.log(todId);

	//condicion de input despues de ser cheaqueado subrayarlo(todo completado o no)
	if(nombreElemento.includes('input')){ //click en el check
		todoList.marcarCompletado(todId);
		todoElemento.classList.toggle('completed');
	}else if(nombreElemento.includes('button') ) {//hay que borrar el todo
		todoList.eliminarTodo(todId);
		divTodoList.removeChild(todoElemento);
	}

	//console.log(todoList);

});
btnBorrar.addEventListener('click',() => {
	todoList.eliminarCompletados();

	for (let i = divTodoList.children.length-1; i >= 0; i--){//este es un for inverso de la lista de elementos

		const elemento = divTodoList.children[i];

		if(elemento.classList.contains('completed') ){
			divTodoList.removeChild(elemento);
		}
	}
	
});

ulFiltros.addEventListener('click', (event) => {
	
	const filtro =  event.target.text;
	if(!filtro) return;

	anchorFiltros.forEach(elem => elem.classList.remove('selected'));
	event.target.classList.add('selected');
	





	for(const elemento of divTodoList.children){
		//console.log(elemento);
		elemento.classList.remove('hidden');
		const completado = elemento.classList.contains('completed');

		switch(filtro){

			case 'Pendientes' :
				if(completado){
					elemento.classList.add('hidden');
				}
				break;
			case 'Completados' :
				if(!completado){
					elemento.classList.add('hidden');
				}
				break;

		}
	}
});
