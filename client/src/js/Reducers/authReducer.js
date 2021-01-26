import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
} from '../constants/ActionsTypes';

const initialState = {
  token: localStorage.getItem('token'), //null
  user: null,
  isAuth: false,
  isLoading: false,
  msg: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        ...payload,
      };

    case GET_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        ...payload,
      };
    case AUTH_ERRORS:
    case LOGOUT_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
