import * as cinemaService from '../services/CinemaService';
import * as constants from '../constants';

export const getMovies = () => {
    return async dispatch => {
        try {
            console.log("getting")
            const movies = await cinemaService.getMovies();
            dispatch(getCurrentMovies(movies));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getCurrentMovies = movies => ({
    type: constants.GET_MOVIES,
    payload: movies
});
