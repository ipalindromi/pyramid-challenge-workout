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
								<h1>The Pyramid Challenge</h1>
								<h2>A super fun way to kill yourself, by Dustin Baldwin</h2>
								<hr/>
								<h2>Rules / Instructions / More-What-You'd-Call-Guidelines</h2>
								<ol>
									<li>Choose an exercise</li>
									<li>Choose a difficulty</li>
									<li>Enter the maximum weight you can lift for a single rep for the exercise you
										chose
									</li>
									<li>Try to complete the generated workout as quickly as possible <strong>WITH GOOD
										FORM!</strong>. Track your time!
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
			<div className="row">
				<div className="col-xs-12">
					<div id="footer-panel" className="panel panel-default">
						<div className="panel-body">
							<h1>What Is This?</h1>
							<p>
								This is a personal project I threw together because I wanted a fun challenge to help me
								progress past my fatigue limits. I don't have a ton of time, though,
								and was trying to think up a way to break through my limits without spending hours and
								hours doing it. This is the result.
							</p>
							<p>
								The combination of high volume and low rest periods makes for a very challenging, yet
								quick, workout that absolutely accomplishes its goal of training you to fight through
								fatigue. The next time you go for a heavy 5-rep lift, it'll feel like a relief after
								this torture.
							</p>
							<p>
								Hopefully this app makes it easier for others to join in the fun! Pyramid lifting
								schemes are nothing new, of course, but this app helps take some of the guess-work out
								of the progression and keeps you on a consistent path towards progression.
							</p>
							<h2>What's Next?</h2>
							<p>I have a lot of ideas I'd like to implement, as time allows. Most of this stuff isn't too
								difficult, so if you're a coder and want to help out, check out the github page
								[here]!</p>
							<ul>
								<li>Weight calculator, so you know exactly what to put on the bar.</li>
								<li>More customization of workout parameters</li>
								<li>Ability to save best times / completions locally</li>
								<li>Make site work with metric units</li>
							</ul>
						</div>
					</div>
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
