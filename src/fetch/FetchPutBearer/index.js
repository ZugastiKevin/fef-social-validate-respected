import { fetchNewsRequest, fetchNewsFailure, fetchedCurrent, isSubmited } from 'reduxx/Action';
import Cookies from "js-cookie";

const fetchPutBearer = (finalUrl, Data, isSubmit) => {
  const cookie = Cookies.get("token");

  return (dispatch) => {
    dispatch(fetchNewsRequest(true));
    fetch(finalUrl, {
      method: "put",
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
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
            dispatch(fetchedCurrent(element.username));
          }
        }
      });
  };
};

export default fetchPutBearer;