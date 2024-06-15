import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






app.listen(port, () => {
    console.log(`API is running at http://localhost:${port} abc`);
});