Running the app:
1. Pull down the latest, and run `yarn install`.
2. `yarn start` will launch the dev server, and the proxy server for the etsy api.
3. You're off to the races!

How it was built:
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- I used 'styled-components' for styling. 
- I used a prettier pre-commit hook for auto-formatting my code with some sensible defaults. 
- I used redux for state managment (overkill for a project this size), but it's sensible to start most projects with a state managment solution in mind, because you never know how large they'll become.
- I used a node proxy for the etsy api. I wanted to stick as close to a production project as I could: using a proxy makes it easier to handle errors, monitor the usage and uptime of third party api's, and keep your code as single purpose as possible.
- I used a bit of humour, all at Etsy's expense.
