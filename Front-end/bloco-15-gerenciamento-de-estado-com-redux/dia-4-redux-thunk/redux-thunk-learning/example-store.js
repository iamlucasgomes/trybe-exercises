// arquivo em que a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

// ...

const store = createStore(reducer, applyMiddleware(thunk));
// ...