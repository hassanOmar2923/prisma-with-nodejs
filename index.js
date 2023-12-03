import express from 'express'
const app = express()
import sampleRoute from './route/index.js'
import stdRoute from './route/students.js'
app.use(express.json())
app.use('/class',sampleRoute)
app.use('/student',stdRoute)
app.listen(3007,()=>{
    console.log("listening on post 3007")
})