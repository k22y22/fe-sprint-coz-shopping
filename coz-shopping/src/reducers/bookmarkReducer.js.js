import { ADD_TO_BOOKMARK, REMOVE_FROM_BOOKMARK } from "../actions/actions";
import { initialState } from "./initialState";


const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload.itemId]
      };

    case REMOVE_FROM_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((id) => id !== action.payload.itemId)
      };

    default:
      return state;
  }
};

export default bookmarkReducer;