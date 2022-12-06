import { GET_CURRENT_DEGREE } from '../constants';
import weatherService from '../services/weatherService';
import * as constants from '../constants';

export const getCurrentDegree = () => async dispatch => {
   const currentDegree = await weatherService.getCurrentDegree();
   dispatch(getCurrentDegreeSuccess(currentDegree));
}

const getCurrentDegreeSuccess = currentDegree => ({
        type: constants.GET_CURRENT_DEGREE,
        payload: currentDegree
});