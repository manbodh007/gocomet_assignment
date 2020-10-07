import { combineReducers } from "redux";
import { ADD_POST_DETAIL, FETCH_POST, FETCH_POST_START } from "../action/action";

const intialState = {
    progress:true,
    Tag:''
}

export function data(state = intialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
          data:action.data,
          progress:false,
          Tag:action.searchedTag
      }
    case FETCH_POST_START:
      return {
          ...state,
          progress:true
      }
    case ADD_POST_DETAIL:
      return {
        ...state,
        postDetail:action.data,
        progress:false
      }
    default:
      return state;
  }
}

export default combineReducers({
  data,
});
