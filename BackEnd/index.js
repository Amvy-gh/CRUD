import express from "express";
import cors from "cors";
import userRoute from  "./routes/UserRoute.js";
;

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(5000, ()=> console.log('listening on port'));