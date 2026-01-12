import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: "all",
    Completed: "Completed",
    Pending: "Pending",
};

const state = {
    todos: [
        new Todo("Piedra del infinito"),
        new Todo("Piedra de marfil"),
        new Todo("Piedra del tanos"),
    ],

    filter: Filters.All,
};

const initStore = () => {
    console.log(state);
    console.log("Store was initialized...");
};

const loadStore = () => {
    throw new Error("Not implemented");
};

/**
 * 
 * @param {String} filter filtro que usaremos para mostrar los todos
 * @returns 
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter((todo) => todo.done);
        case Filters.Pending:
            return state.todos.filter((todo) => !todo.done);
        default:
            throw new Error("Estado no definido");
    }
};

/**
 *
 * @param {String} description
 * @returns {Todo} retorna una instancia de Todo
 */
const addToo = (description) => {
    if (!description) {
        throw new Error("Description is required");
    }
    state.todos.push(new Todo(description));
};

/**
 *
 * @param {Sting} todoId
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => { //con map podemo barrer todos los ToDos que tengamos en nutra lista
        if (todo.id === todoId) {
            todo.done = !todo.done;

        }

        return todo;
    })

};

/**
 *
 * @param {*} todoId
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
};
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);

};


/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    Object.keys(Filters).includes(newFilter);
    state.filter = newFilter;
};

const getCurrentFilter = () => {
    return state.filter;
};

export default {
    addToo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
};