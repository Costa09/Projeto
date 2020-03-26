export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
};

const INITIAL_STATE = {
  email: null,
  password: null,
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {...state, loading: true};
    case Types.SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return {...state, error: true};
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: (email, password) => ({
    type: Types.REQUEST,
    payload: {email, password},
  }),

  loginSuccess: (email, password) => ({
    type: Types.SUCCESS,
    payload: {email, password},
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),
};
