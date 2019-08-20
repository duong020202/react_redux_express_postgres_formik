import {
    deleteItem
  } from "./getItem";

function deleteItemAction (id) {
    return dispatch => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      fetch("http://127.0.0.1:3000/crud", {
        method: "delete",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id
        })
      })
        .then(response => response.json())
        .then(item => {
            dispatch(deleteItem(id));
        })
        .catch(err => console.log(err));
    }
}
  };

  export default deleteItemAction;
