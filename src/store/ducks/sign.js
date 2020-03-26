export const Types ={
    REQUEST: 'SIGN_REQUEST',
    SUCCESS: 'SIGN_SUCCESS',
    FAILURE: 'SIGN_FAILURE',
}

const INITIAL_STATE = {
    username: null,
    loading: false,
    error: false
}

export default function sign(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.REQUEST:
            return {...state, loading: true}
        case Types.SUCCESS:
            return { ...state, username: action.payload.username, error: false, loading : false}
        case Types.FAILURE:
            return { ...state, error: true }
        default:
            return state;
    }
}

export const Creators = {
    signRequest: username => ({
        type: Types.REQUEST,
        payload: {username}
    }),
    
    signSuccess: username =>({
        type: Types.SUCCESS,
        payload : {username}
    }),
    
    signFailure: () =>({
        type: Types.FAILURE,
    }),
}