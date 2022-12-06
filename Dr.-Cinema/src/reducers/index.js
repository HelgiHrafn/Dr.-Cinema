import { combineReducers } from 'redux';
import weather from './weatherReducers'

export default combineReducers({
    weather,
});