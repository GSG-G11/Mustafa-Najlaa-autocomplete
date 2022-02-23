const http = require('http')
const router = require('./router')
const server = http.createServer(router)
require("env2")(".env")
const port = process.env.PORT || 8000






server.listen(port, ()=>{
    console.log(`Server is running http://localhost:${port}`)
})