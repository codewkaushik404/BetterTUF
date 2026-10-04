import dotenv from "dotenv";
dotenv.config();

if(!process.env.PORT) throw new Error("PORT is not set in env variables");

const CONFIG = {
    PORT: process.env.PORT
}

export default CONFIG;