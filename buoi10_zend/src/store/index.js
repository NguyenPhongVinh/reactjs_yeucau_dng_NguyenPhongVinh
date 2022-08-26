import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './auth/reducer';
import postReducer from './post/reducer';
import categoryReducer from './category/reducer';
import menuReducer from './menu/reducer';
import tagReducer from './tag/reducer';
const rootReducer = combineReducers({
  Post: postReducer,
  Auth: authReducer,
  Category: categoryReducer,
  Menu: menuReducer,
  Tag: tagReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;