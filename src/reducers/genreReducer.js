import * as constants from '../constants'

export default function (state = [], action) {
    switch (action.type) {
    case constants.GET_GENRES: return action.payload
    default: return state
    }
};
