import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import Header from './dumb/Header'
import Footer from './dumb/Footer'
import SettingsForm from './SettingsForm'
import ChallengeReportWrapper from './ChallengeReportWrapper'

const isStateAware = component => {
	const mapStateToProps = state => {
		return state;
	};

	return connect(
		mapStateToProps
	)(component);
};

const AwareSettingsForm = isStateAware(SettingsForm);
const AwareResultsForm = isStateAware(ChallengeReportWrapper);

// FIXME : Hotloader wants this to be a full Component.
// This is fixed in Webpack 3
class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-10 col-md-offset-1">
							<Paper zDepth={3}>
								<Header/>
								<AwareSettingsForm/>
								<AwareResultsForm/>
								<Footer/>
							</Paper>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
