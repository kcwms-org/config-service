import bodyParser from 'body-parser';
import express from "express";
import mongoose from 'mongoose';
import ConfigSettingRoutes from "./src/routes/configSettingRoutes";

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ConfigSettings', {
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