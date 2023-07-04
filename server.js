import express from 'express';
import dotenv from 'dotenv';
import emailRoutes from './routes/emailRoutes.js';

const app = express();
dotenv.config();

import cors from "cors";
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

//Signup and login
app.use("/api/email", emailRoutes);

// app.get("/api", (req, res) => {
//     res.send("Hello World!");
// });

app.use("/api/products", (req, res) => {
    return res.status(200).json({
        message: "this is my first comment"
    })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});