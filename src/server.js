const http = require('http')
const router = require('./router')
const server = http.createServer(router)

const port = process.env.port || 8000






server.listen(port, ()=>{
    console.log(`Server is running http://localhost:${port}`)
})