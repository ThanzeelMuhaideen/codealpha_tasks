import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { clerkWebHooksHandler } from "./webhooks/clerk";
import { getEnv } from "./lib/env";

const env = getEnv();
const app = express();

const rawJson = express.raw({ type: "application/json", limit: "1mb"});

//its important that you dont parse the wbhook event data, it should be in raw format

app.post("/webhooks/clerk", rawJson, (req, res)=> {
    void clerkWebHooksHandler(req,res);
});

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());


app.listen(env.PORT, () => console.log("Listening on Port:", env.PORT));