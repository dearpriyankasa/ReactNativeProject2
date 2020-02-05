import { createStore, applyMiddleware } from 'redux';
import app from './reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
    console.log("Store configured");
    let store = createStore(app, applyMiddleware(thunk));
    console.log("Initial store state --> ", store.getState());
    store.subscribe(() => console.log("Updated state --> ", store.getState()));
    return store
}