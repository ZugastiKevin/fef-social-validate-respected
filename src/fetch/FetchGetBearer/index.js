import { fetchNewsRequest, fetchNewsFailure, userInfo } from 'reduxx/Action';
import Cookies from "js-cookie";

const fetchGetBearer = (finalUrl) => {
  const cookie = Cookies.get("token");
  return (dispatch) => {
    dispatch(fetchNewsRequest(true));
    fetch(finalUrl, {
      method: "get",
      headers: {
        "Authorization": `Bearer ${cookie}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((element) => {
        if (element.status === "error") {
          dispatch(fetchNewsFailure(false, element.message));
        } else {
          dispatch(userInfo(element));
        }
      });
  };
};

export default fetchGetBearer;