import express from "express";
import router from "./routes/api";

const app = express();

const PORT = 3000;

app.use('/api', router);



app.listen(PORT, () =>{
    console.log(`Server isss running on port ${PORT}`);
})