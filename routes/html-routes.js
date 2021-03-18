const path = require("path");

//every route needs to go ahead of app.get('*') or else it /// won't work
module.exports = (app) => {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../html/index.html')
        );
    });
};