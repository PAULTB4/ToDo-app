import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const elementIDs = {
    TodoList: '.todo-list',
    NewToDoInput: '#new-todo-input',
    DeleteToDo: '.destroy'

}



/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todos);
    }


    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //referencias HTML
    const newDescriptionInput = document.querySelector(elementIDs.NewToDoInput);
    const todoListUL = document.querySelector(elementIDs.TodoList);


    //listeners
    newDescriptionInput.addEventListener('keyup', () => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;
        todoStore.addToo(event.target.value);
        displayTodos();
        event.target.value = "";
    })

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        console.log(event.target)
        displayTodos();
    })
    todoListUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');

        if (!element || !isDestroyElement) return;
        todoStore.deleteTodo(element.getAttribute('data-id'));

        displayTodos();
    })
}