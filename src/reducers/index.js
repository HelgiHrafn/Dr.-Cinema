import { combineReducers } from 'redux'
import cinemas from './cinemaReducer'
import upcoming from './upcomingReducer'
import movies from './movieReducer'
import genres from './genreReducer'

export default combineReducers({
    cinemas,
    upcoming,
    movies,
    genres
})
