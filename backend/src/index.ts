import express from "express";
import CONFIG from "./config/config.js";
import {clerkMiddleware} from "@clerk/express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Server is running");
})

app.listen(CONFIG.PORT, () => {
    console.log(`App is listening on PORT: ${CONFIG.PORT}`);
})

