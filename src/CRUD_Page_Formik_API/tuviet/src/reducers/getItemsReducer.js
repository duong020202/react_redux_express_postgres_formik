import {
  FETCH_ITEMS_PENDING,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM
} from "../actions/types";

const initialState = {
  pending: false,
  items: [],
  error: null
};

export function getItemsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.payload
      };
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };

    case DELETE_ITEM:

      const filterState = state.items.filter(
        items => items.id !== action.payload
      );
      return { ...state, items: filterState };
      
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.payload)
      }

    case UPDATE_ITEM:
      //   const item = action.payload
      //   const itemIndex = state.items.findIndex(items => items.id === item.id);
      //   console.log(itemIndex)
      //   const newArray = [
      //     state.items.slice(0, itemIndex),
      //     item,
      //     state.items.slice(itemIndex + 1)
      //   ];
      // return {
      //   ...state,
      //   items: newArray
      // }
      // console.log(action.payload)
      // let index = state.items.findIndex(item => item.id === action.payload.id);
      // let todos = [...state.items];
      // todos[index] = {...todos[index],
      //   first: action.payload.first,
      //   last: action.payload.last,
      //   email: action.payload.email,
      //   phone: action.payload.phone,
      //   location: action.payload.location,
      //   hobby: action.payload.hobby};
      // console.log(todos[index])
      // return {...state, todos}
      return {
        ...state,
        // optional 2nd arg in callback is the array index
        items: state.items.map((item, index) => {
          if (item.id === action.payload.id) {
            return action.payload
          }

          return item
        })}

    default:
      return state;
  }
}


export const getItems = state => { return state.items};
export const getItemsPending = state => { return state.pending};
export const getItemsError = state => { return state.error};

