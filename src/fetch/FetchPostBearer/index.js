import { fetchNewsRequest, fetchNewsFailure, isSubmited } from 'reduxx/Action';
import Cookies from "js-cookie";

const fetchPostBearer = (finalUrl, data, isSubmit) => {
  const cookie = Cookies.get("token");
  
  return (dispatch) => {
    dispatch(fetchNewsRequest(true));
    fetch(finalUrl, {
      method: "post",
      headers: {
        "Authorization": `Bearer ${cookie}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

export default fetchPostBearer;