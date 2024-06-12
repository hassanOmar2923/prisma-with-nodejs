import express from 'express'
const app = express()
import sampleRoute from './route/index.js'
// import stdRoute from './route/students.js'
app.use(express.json())
app.get("/", async (req, res) => {
res.status(200).json('welcome to company records service Api')
    
  });
app.use('/compnay',sampleRoute)
// app.use('/student',stdRoute)
app.listen(3007,()=>{
    console.log("listening on post 3007")
})