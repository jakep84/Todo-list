import {createStore, compose, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native';
import ReduxThunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from '../reducers';

var defaultState = {
};

exports.configureStore = (initialState = defaultState) => {
  var store = createStore(reducer, initialState, compose(
    applyMiddleware(ReduxThunk),
    autoRehydrate()
  ));
  persistStore(store, { storage:AsyncStorage });
  return store;
}
