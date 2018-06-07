import { UPDATE_SEARCH_TERM, UPDATE_LISTINGS } from './actions';
import fetchJsonp from 'fetch-jsonp';

export function updateSearchTerm(searchTerm) {
  return { type: UPDATE_SEARCH_TERM, payload: searchTerm };
}

export function updateListings(listingsData) {
  return { type: UPDATE_LISTINGS, payload: listingsData };
}

export function getListings(searchTerm) {
  return dispatch => {
    fetchJsonp(
      `https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=e6ky4m413kjm7yw0dqqidku4&keywords=${searchTerm}&includes=Images(url_170x135):1:0`
    )
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
