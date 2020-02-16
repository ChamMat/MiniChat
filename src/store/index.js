import { createStore } from 'redux';
import reducer from 'src/reducers/app';

const store = createStore(
  reducer,
);

export default store;
