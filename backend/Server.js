const express = require("express");

const moongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/TaskRoute");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 5000

app.use(express.json());
app.use(cors());

moongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

app.use("/api",routes);



app.listen(PORT, () => console.log(`Listening on ${PORT}`));