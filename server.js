import express from "express"

const port = process.env.PORT|| 3000

const app = express()

app.get("/",()=>{
    console.log("you are here")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
