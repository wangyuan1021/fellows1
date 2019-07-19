import {createStore} from 'redux';
import reducer from './reducer';

const inintialState = {
    count:0
}
//reducer  state
const store = createStore(reducer,inintialState);
export default store;
