import React, {
	PureComponent
} from 'react'

// Required for material-ui to work
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

import {
	createStore,
} from 'redux'
import {
	Provider,
} from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducers'

import Header from './components/dumb/Header'
import Footer from './components/dumb/Footer'
import ConnectedSettingsForm from './components/connected/ConnectedSettingsForm'
import ConnectedChallengeReport from './components/connected/ConnectedChallengeReport'

import './styles/app.css'

// FIXME : Hotloader wants this to be a full Component.
// This is supposed to be fixed in Webpack 3
injectTapEventPlugin();

export default class extends PureComponent {
	render() {
		return (<Provider store={createStore(reducers)}>
			<MuiThemeProvider>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-10 col-md-offset-1">
							<Paper zDepth={3}>
								<div className="row">
									<div className="col-xs-12">
										<Header/>
										<Divider/>
									</div>
								</div>
								<div className="row settingsRow flexRow">
									<div className="col-xs-5">
										<ConnectedSettingsForm/>
									</div>
									<div className="col-xs-7 flexRow">
										<ConnectedChallengeReport/>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<Divider/>
										<Footer/>
									</div>
								</div>
							</Paper>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
  </Provider>)
	}
};