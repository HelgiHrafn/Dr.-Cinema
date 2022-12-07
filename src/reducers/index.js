import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import upcoming from './upcomingReducer';
import movies from './movieReducer'

export default combineReducers({
    cinemas,
    upcoming,
    movies
});
