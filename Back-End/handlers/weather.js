var request = require('request');

exports.getWeather = (req, res) => {
    if (req.method !== 'GET') {
        return res.status(403).send('Forbidden!');
    }
    
    const queryLat = req.query.lat || 0;
    const queryLong = req.query.long || 0;
    const queryExclude = req.query.exclude || 'minutely,hourly,alerts,flags';
    const queryUnits = (['us', 'si'].indexOf(req.query.units) === -1)? 'si' : req.query.units;
    const queryLang = req.query.lang || 'en';

    const reqUrl =  `https://api.darksky.net/forecast/${process.env.API_KEY}/${queryLat},${queryLong}?exclude=${queryExclude}&units=${queryUnits}&lang=${queryLang}`
    
    request(reqUrl, function (error, api_res, body) {
        const statusCode = api_res.statusCode;
        const weatherData = JSON.parse(body);

        res.json({error, statusCode, weatherData});
    });
    
};