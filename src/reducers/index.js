import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import movies from './movieReducer'

export default combineReducers({
    cinemas,
    movies
});
