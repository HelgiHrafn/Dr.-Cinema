import * as cinemaService from '../services/CinemaService';
import * as constants from '../constants';

export const getGenres = () => {
    return async dispatch => {
        try {
            const genres = await cinemaService.getGenres();
            dispatch(getCurrentGenres(genres));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getCurrentGenres = genres => ({
    type: constants.GET_GENRES,
    payload: genres
});
