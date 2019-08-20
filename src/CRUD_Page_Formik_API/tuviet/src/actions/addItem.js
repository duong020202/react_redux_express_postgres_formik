import {
    addItem
  } from "./getItem";



  function addItemAction (item)  {
    return dispatch => {
        dispatch(addItem(item))
    // this.setState(prevState => ({
    //   items: [...prevState.items, item]
    // }));
  }};
  export default addItemAction;
