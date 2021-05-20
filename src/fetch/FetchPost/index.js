import { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure, getCurrentUserId} from 'reduxx/Action';
import Cookies from 'js-cookie';

const fetchPost = (finalUrl, data) => {
  return (dispatch) => {
    dispatch(fetchNewsRequest(true));
    fetch(finalUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((element) => {
        if (element.status === "error") {
          dispatch(fetchNewsFailure(false, element.message));
        } else {
          Cookies.set("token", element.jwt);
          const cookie = Cookies.set("userId", element.user.id);
          dispatch(getCurrentUserId(cookie));
          dispatch(fetchNewsSuccess(true));
        }
      });
  };
};

export default fetchPost;
