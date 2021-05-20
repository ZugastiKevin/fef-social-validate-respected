import { fetchNewsRequest, fetchNewsFailure, fetchedAllPost } from 'reduxx/Action';

const fetchGet = (finalUrl) => {
  return (dispatch) => {
    dispatch(fetchNewsRequest(true));
    fetch(finalUrl, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "error") {
          dispatch(fetchNewsFailure(false, response.message));
        } else {
          dispatch(fetchedAllPost(response));           
        }
      });
  };
};

export default fetchGet;