import settingsReducer from './settingsReducer'
import {
	combineReducers,
} from 'redux'

export default combineReducers({
	settings: settingsReducer
});