import { createStore } from 'redux'
import ToDoReducer from './reducer';


const store = createStore(ToDoReducer);

export default store;