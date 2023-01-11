import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import router from './routes/router';


const app = express();

app.use(express.json());

app.use(router);


mongoose.connect("mongodb+srv://desafio:desafio1234@cluster0.hsuctxx.mongodb.net/?retryWrites=true&w=majority")

.then((data) => {
    console.log("MongoDB Connection Succeeded");
    
})

.catch((err) => {
    console.log("Erro in connection", err.message);
    
})


app.listen(3000, () => "server running on port 3000")