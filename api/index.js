const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 4000;


app.get('/api', (request, response) => {
    const search = request.query.keywords;
    console.log(search);
    fetch(`https://openapi.etsy.com/v2/listings/active?api_key=e6ky4m413kjm7yw0dqqidku4&keywords=${search}&includes=Images(url_170x135):1:0`)
        .then(res => res.json())
        .then(
            (res) => {
                response.status(200);
                response.send(res);
                console.log(res);
            }
        )
        .catch(
            (error) => {
                console.log(error);
                response.status(500);
                response.send("Can not retrieve search term at this time.")
            }
        );
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Proxy server error.', err)
    }

    console.log(`server is listening on ${port}`)
});