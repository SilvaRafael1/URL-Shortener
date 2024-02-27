import express from "express";
import { customAlphabet } from "nanoid";
import Url from "../models/Url.js";
import { validateUrl } from "../utils/validateUrl.js";
import { configDotenv } from "dotenv";
configDotenv;

const router = express.Router();

// Short URL Generator
router.post("/short", async (req, res) => {
    const { origUrl } = req.body;
    const port = 3333;

    const nanoid = customAlphabet("123456789qwertyuiopasdfghjklzxcvbnm", 10)
    const urlId = nanoid();
    if (validateUrl(origUrl)) {
        try {
            let url = await Url.findOne({ origUrl });
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `http://localhost:${port}/${urlId}`;

                url = new Url({
                    origUrl,
                    shortUrl,
                    urlId,
                    date: new Date(),
                });

                await url.save();
                res.json(url);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json("Server Error");
        }
    } else {
        res.status(400).json("Invalid Original Url");
    }
});

export default router;
