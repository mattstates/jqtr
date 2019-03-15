const express = require('express')
const app = express()
const port = 1234
const fetch = require('node-fetch')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(express.static('dist'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

app.get('/test', async (req, res) => {
    const test = Object.entries(req.query).reduce((queryParams, entry, index) => {
        return `${queryParams}${index ? '&' : ''}${entry[0]}=${entry[1]}`
    }, '');

    try {
        const response = await fetch(`https://lampstrack.lampsplus.com:8443/rest/api/2/search?${Object.entries(req.query).reduce((queryParams, entry, index) => {
            return `${queryParams}${index ? '&' : ''}${entry[0]}=${entry[1]}`
        }, '')}&maxResults=1000&fields=-description`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Basic Y2lhZG1pbjp4eHVTTmRROTReY2VjIzlOcWVH'
                }
            });

        const json = await response.json();
        return res.json(json);

    } catch (error) {
        res.sendStatus(400);
    }

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))