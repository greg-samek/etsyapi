import { UPDATE_SEARCH_TERM, UPDATE_LISTINGS } from './actions';

const DEFAULT_STATE = {
  searchTerm: '',
  listings: []
};

const updateSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const updateListings = (state, action) => {
  return Object.assign({}, state, { listings: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return updateSearchTerm(state, action);
    case UPDATE_LISTINGS:
      return updateListings(state, action);
    default:
      return state;
  }
};

export default rootReducer;
