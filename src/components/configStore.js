import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import todoApp from '../reducers';

const configStore = () => {
	const persistedState = loadState();
	const store = createStore(todoApp, persistedState);
	console.log(store.getState());

	store.subscribe(throttle(() => {
		saveState({
			todos: store.getState().todos
		});
	}, 1000));

	return store;		
}

export default configStore;