import express from 'express'
const app = express()
import sampleRoute from './route/index.js'
import cors from 'cors';
app.use(express.json())
app.use(cors());
app.get("/", async (req, res) => {
res.status(200).json('welcome to company records service Api')
  });
app.use('/compnay',sampleRoute)
// app.use('/student',stdRoute)
app.listen(3007,()=>{
    console.log("listening on post 3007")
})