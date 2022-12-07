import * as cinemaService from '../services/CinemaService';
import * as constants from '../constants';

export const getCinemas = () => {
    return async dispatch => {
        try {
            console.log("getting")
            const cinemas = await cinemaService.getTheaters();
            console.log("Are we getting cinemas", cinemas)
            dispatch(getCurrentCinemas(cinemas));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getCurrentCinemas = cinemas => ({
    type: constants.GET_CINEMAS,
    payload: cinemas
});
