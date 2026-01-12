import './style.css';
import { App } from './todos/app';
import todoStore from './store/todo.store'; //Hacemo un expotacion por deault

todoStore.initStore();
App('#app');