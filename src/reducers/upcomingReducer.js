import * as constants from '../constants';

export default function (state = [], action) {
    //console.log("whats the upcoming action", action)
    switch (action.type) {
        case constants.GET_UPCOMING: return action.payload;
        default: return state;
    }
};
