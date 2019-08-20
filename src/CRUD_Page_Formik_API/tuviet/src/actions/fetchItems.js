import {
  fetchItemsPending,
  fetchItemsSuccess,
  fetchItemsError
} from "./getItem";

function fetchItemsAction() {
  return dispatch => {
    dispatch(fetchItemsPending());
    fetch("http://127.0.0.1:3000/crud")
      .then(res => res.json())
      // .then((resJson) => { this.setState({ items: resJson})})
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchItemsSuccess(res)); 
        console.log(res)
        return res;
      })
      .catch(error => {
        dispatch(fetchItemsError(error));
        console.log(error)
      });
  };
}

export default fetchItemsAction;
