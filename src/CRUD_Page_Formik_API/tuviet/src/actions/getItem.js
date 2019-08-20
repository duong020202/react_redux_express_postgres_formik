import * as types from "./types";

export function fetchItemsPending() {
  return {
    type: types.FETCH_ITEMS_PENDING
  };
}

export function fetchItemsSuccess(items) {
  return {
    type: types.FETCH_ITEMS_SUCCESS,
    payload: items
  };
}

export function fetchItemsError(error) {
  return {
    type: types.FETCH_ITEMS_ERROR,
    error: error
  };
}

export function deleteItem(id) {
  return {
    type: types.DELETE_ITEM,
    payload: id,
  };
}

export function addItem(item) {
  return {
    type: types.ADD_ITEM,
    payload: item,
  };
}

export function updateItem(item) {
  return {
    type: types.UPDATE_ITEM,
    payload: item,
  };
}
