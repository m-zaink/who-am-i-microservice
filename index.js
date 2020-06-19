const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ optionSuccessStatus: 200 }));

app.get('/api/whoami', (req, res) => {
    console.log(req.headers);
    const responseToReturn = {
        "ipaddress": req.connection.remoteAddress || req.headers['x-forwarded-for'],
        "language": req.headers['accept-language'],
        "software": req.headers['user-agent']
    };

    res.send(responseToReturn);
});

var listener = app.listen(process.env.PORT || 3000, () => console.log('Listening on port ' + (process.env.PORT || 3000)));