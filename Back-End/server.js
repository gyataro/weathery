require('dotenv').config()

const { getWeather } = require('./handlers/weather');

const express   = require('express');
const app       = express();

const cors = require('cors');

const corsOptions = {
    origin: /\.darksky\.net$/,
    optionsSuccessStatus: 200 //For legacy systems that choke on 204
};

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

app.use(cors());

app.get('/weather', cors(corsOptions), getWeather);

app.listen(process.env.PORT || 3000, function(){
    console.log("Now listening on port", (process.env.PORT || 3000));
})
