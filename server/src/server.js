import app from "./app.js";
import connectDB from "./db/db.js";
import "dotenv/config";

const port = 3333;

// Server setup and start DB
const start = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            console.error("MongoDB URI is not defined");
        }

        await connectDB(mongoURI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.error(error);
    }
};

start();
