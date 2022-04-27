const express = require("express");
const routes = require('../routes');

const app = express();
const PORT = 8087;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`app is runnig on port ${PORT}`);
});