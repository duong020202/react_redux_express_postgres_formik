import {
    updateItem
  } from "./getItem";



  function updateItemAction (item)  {
    return dispatch => {
        dispatch(updateItem(item))
    // this.setState(prevState => ({
    //   items: [...prevState.items, item]
    // }));
  }};
  export default updateItemAction;
