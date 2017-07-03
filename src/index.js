// DEPENDENCIES
import React, {PureComponent} from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import pyramidChallenge from './reducers'

import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App'

// STYLES
import './scss/template.scss';

injectTapEventPlugin();
const store = createStore(pyramidChallenge);

console.log(store.getState());

class AppWithProvider extends PureComponent {
	render() {
		return <Provider store={store}><App/></Provider>;
	}
}

render(
	<Router history={browserHistory}>
		<Route path="/" component={AppWithProvider}>
			<Route path="/pyramid-challenge" component={AppWithProvider}/>
		</Route>
	</Router>
	, document.querySelector('#app'));
