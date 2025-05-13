const { WebSocketServer} = require("ws")
const dotenv = require("dotenv")

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080})

//SEMPRE QUE ALGUÉM CONECTAR EXECUTAR
wss.on("connection", (ws) => {

//SEMPRE QUE DER ERRO EXECUTAR
    ws.on("error", console.error)

    //SEMPRE QUE ALGUÉM ENVIAR UMA MENSAGEM EXECUTAR
    ws.on("message", () => {
        //ENVIAR MENSAGEM PARA TODOS OS CLIENTES
        wss.clients.forEach((clients) => clients.send(data.toString()))      
    })

    console.log("Client conected.")
})