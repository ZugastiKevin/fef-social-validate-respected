import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, FETCHECURRENT, USERINFO, CURRENTUSERID, ISSUBMITED, FETCHEDALLPOST, SETMOVEORREMOVE } from 'reduxx/ActionType';
import Cookies from 'js-cookie';

const cookie = Cookies.get('userId');
const initialState = {
  passed: false,
  ready: cookie ? true : false,
  error: '',
  getCurrent: '',
  info: null,
  currentUser: cookie,
  isPosted: false,
  allPosted: '',
  show: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        passed: action.passed,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        ready: action.ready,
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        passed: action.passed,
        error: action.error,
      };
    case FETCHECURRENT:
      return {
        ...state,
        getCurrent: action.getCurrent,
      };
    case USERINFO:
      return {
        ...state,
        info: action.info,
      };
    case CURRENTUSERID:
      return {
        ...state,
        currentUser: action.currentUserID,
      };
    case ISSUBMITED:
      return {
        ...state,
        isPosted: action.isPosted,
      };
    case FETCHEDALLPOST:
      return {
        ...state,
        allPosted: action.allPosted,
      };
    case SETMOVEORREMOVE:
      return {
        ...state,
        show: action.show,
      };
    default:
      return state;
  }
};

export default reducer;
