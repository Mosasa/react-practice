//store单一状态树
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);//创建一个状态树
export default store;