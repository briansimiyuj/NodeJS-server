import EventEmitter from "events"
import http from "http"

const myEmitter = new EventEmitter()

myEmitter.on("creatingServer", (port, host) =>{

    const server = http.createServer((request, response) =>{

        console.log('Server is running' + request.url)

        response.writeHead(

            200,

            {
                "Content-Type": "text/plain"
            }

        )

        response.end('My first Node.js server')

    })

    server.listen(port, host, () => console.log('Server is running'))

})