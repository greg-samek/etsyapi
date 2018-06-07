import { UPDATE_SEARCH_TERM, UPDATE_LISTINGS } from './actions';

export function updateSearchTerm(searchTerm) {
  return { type: UPDATE_SEARCH_TERM, payload: searchTerm };
}

export function updateListings(listingsData) {
  return { type: UPDATE_LISTINGS, payload: listingsData };
}

export function getListings(searchTerm) {
  return dispatch => {
    //TODO: as an alternative to JSONP, I'm making a request to a simple node proxy I created.
    fetch(`http://localhost:4000/api?keywords=${searchTerm}`)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response;
      })
      .then(response => {
        response.json().then(function(data) {
          dispatch(updateListings(data.results));
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
