import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import upcoming from './upcomingReducer';

export default combineReducers({
    cinemas,
    upcoming
});
