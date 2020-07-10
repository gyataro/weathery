require('dotenv').config()

const { getWeather } = require('./handlers/weather');

const express   = require('express');

// Security modules
const cors = require('cors');
const helmet = require('helmet');

const corsOptions = {
    origin: 'https://client-weathery.netlify.app',
    //For legacy systems that choke on 204
    optionsSuccessStatus: 200 
};

const app = express();
app.use(cors(corsOptions));
app.use(helmet());

app.get('/weather', cors(corsOptions), getWeather);

// 404 Handling (after all routes above doesn't match)
app.use(function(req, res, next){
    res.status(404);
  
    // Respond with HTML page
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    } 
  
    // Respond with JSON
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }
  
    // Respond defaults to text
    res.type('txt').send('Not found');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Now listening on port", (process.env.PORT || 3000));
})
