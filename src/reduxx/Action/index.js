import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, FETCHECURRENT, USERINFO, CURRENTUSERID, ISSUBMITED, FETCHEDALLPOST } from 'reduxx/ActionType';

const fetchNewsRequest = (passed) => ({
  type: FETCH_NEWS_REQUEST,
  passed,
});
const fetchNewsSuccess = (ready) => ({
  type: FETCH_NEWS_SUCCESS,
  ready,
});
const fetchNewsFailure = (passed, error) => ({
  type: FETCH_NEWS_FAILURE,
  passed,
  error,
});
const fetchedCurrent = (getCurrent) => ({
  type: FETCHECURRENT,
  getCurrent,
});
const userInfo = (info) => ({
  type: USERINFO,
  info,
});
const getCurrentUserId = (currentUserID) => ({
  type: CURRENTUSERID,
  currentUserID,
});
const isSubmited = (isPosted) => ({
  type: ISSUBMITED,
  isPosted,
});
const fetchedAllPost = (allPosted) => ({
  type: FETCHEDALLPOST,
  allPosted,
});

export { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure, fetchedCurrent, userInfo, getCurrentUserId, isSubmited, fetchedAllPost };
