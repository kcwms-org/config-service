import bodyParser from 'body-parser';
import express from "express";
import mongoose from 'mongoose';
import ConfigSettingRoutes from "./src/routes/configSettingRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
// get port from environment variable
const PORT = process.env.CURRENCY_SERVICE_PORT || 3000


//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//body parser: this 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//register routes
ConfigSettingRoutes(app);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})