import React from 'react'
import { render } from 'react-dom'
import SetupOptionsForm from './components/SetupOptionsForm'
import WorkoutReport from './components/WorkoutReport'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './scss/template.scss';

injectTapEventPlugin();

const App = (props) => (
	<MuiThemeProvider>
		<div className="container" style={{ padding : 25 }}>
			<div className="row">
				<div className="col-xs-12">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="page-header">
								<h1>The Pyramid Challenge
									<small>Rules</small>
								</h1>
								<hr/>
								<ol>
									<li>Choose an exercise</li>
									<li>Choose a difficulty</li>
									<li>Enter the maximum weight you can lift for a single rep for the exercise you
										chose
									</li>
									<li>Try to complete the generated workout as quickly as possible. Track your time!
									</li>
									<li>When you miss a rep, the game is over. You'll do better next time!</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-lg-6">
					<SetupOptionsForm/>
				</div>
				<div className="col-xs-12 col-lg-6">
					<WorkoutReport/>
				</div>
			</div>
		</div>
	</MuiThemeProvider>
);

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/pyramid-challenge" component={App}/>
		</Route>
	</Router>
	, document.querySelector('#app'));
