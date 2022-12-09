import * as cinemaService from '../services/CinemaService'
import * as constants from '../constants'

export const getCinemas = () => {
    return async dispatch => {
        try {
            const cinemas = await cinemaService.getTheaters()
            dispatch(getCurrentCinemas(cinemas))
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    }
}

const getCurrentCinemas = cinemas => ({
    type: constants.GET_CINEMAS,
    payload: cinemas
})
