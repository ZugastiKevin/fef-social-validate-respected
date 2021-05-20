import Cookies from 'js-cookie';
import { fetchNewsRequest, fetchNewsFailure, isSubmited } from 'reduxx/Action';

const fetchDelete = (finalUrl, isSubmit) => {
  const cookie = Cookies.get("token");

  return (dispatch) => {
    dispatch(fetchNewsRequest(true));
    fetch(finalUrl, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((element) => {
        if (element.status === "error") {
          dispatch(fetchNewsFailure(false, element.message));
        } else {
          if (isSubmit) {
            dispatch(isSubmited(false));
          } else {
            dispatch(isSubmited(true));
          }
        }
      });
  };
};

export default fetchDelete;