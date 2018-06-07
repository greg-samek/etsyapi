Running the app:
1. Pull down the latest, and run `yarn install`, followed by `yarn build`.
2. I use `serve` locally, but you can use whatever server you choose to serve the '/build' directory. I used the commands `yarn global add serve`, followed by `serve -s build`.
3. Search away!   

How it was built:
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- I used 'styled-components' for styling. 
- I used stateless-functional components wherever possible.
- I used a prettier pre-commit hook for auto-formatting my code with some sensible defaults. 
- I used redux for state managment (overkill for a project this size), but it's sensible to start most projects with a state managment solution in mind, because you never know how large they'll become.
- I used a bit of humour, all at Etsy's expense.

This app looks best on Chrome Version 66.0.3359.181 or later.

TODO:
1. Add the ability to bookmark a search. This would be best accomplished by adding a 'bookmarkedSearches' state to the redux store, and then syncing the store with local storage.
2. Results paging. I only request the first 25 results from the etsy api. By adding 'resultsPage' and 'numberListings' to the store, along with the appropriate actions for iterating and resetting to zero, this functionality could be added.
3. Better error handling. Before I moved to redux, I used an error component for indicating error messages to the user. To make this functionality work again, an array of 'errors' would have to be added to the redux store, which could be passed down to the SearchResults component.
4. Testing.
