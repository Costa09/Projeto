import {createReducer, createActions} from 'reduxsauce';

export const {Types, Creators} = createActions({
  loginRequest: [],
  loginSuccess: ['email', 'password'],
  loginFailure: [],
});

const INITIAL_STATE = {
  loading: false,
  error: false,
};

const loginRequest = (state) => ({
  ...state,
  loading: true,
  error: false,
});
const loginSuccess = (state, action) => ({
  ...state,
  email: action.email,
  password: action.password,
  loading: false,
  error: false,
});

const loginFailure = (state, action) => ({
  ...state,
  loading: false,
  error: true,
});

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
});
