import express, { Request, Response } from 'express';
// import router from './routes/router';


const app = express()

// app.use(express.json());

// app.use(router)

app.get('/', (req:Request, res:Response) => {
    return res.send('Helo!')
})

app.listen(3000)