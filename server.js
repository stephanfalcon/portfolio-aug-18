const express = require("express")

const port = process.env.PORT|| 3001

const app = express()

app.get("/",(req,res)=>{
    console.log()``
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
