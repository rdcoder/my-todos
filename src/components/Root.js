import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

// optional filter below in route
const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={browserHistory}>
    	<Route path='/(:filter)' component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root;