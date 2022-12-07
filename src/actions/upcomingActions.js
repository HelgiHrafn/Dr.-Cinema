import * as cinemaService from '../services/CinemaService';
import * as constants from '../constants';

export const getUpcoming = () => {
    return async dispatch => {
        try {
            // console.log("getting upcoming")
            const upcoming = await cinemaService.getUpcoming();
            // console.log("Are we getting upcoming movies", upcoming)
            dispatch(getCurrentUpcoming(upcoming));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getCurrentUpcoming = upcoming => ({
    type: constants.GET_UPCOMING,
    payload: upcoming
});
