import express from "express"; // En primer lugar importo el módulo de express.
import "dotenv/config.js"
import "./config/database.js"

const server = express()       // Definimos un servidor directamente ejecutando el módulo como si fuera una función
const PORT = process.env.PORT || 8080              // Definimos el puerto local donde va a funcionar el servidor.

const ready = ()=> console.log("Ready on: "+PORT) // Definimos la función que se va a ejecutar cuando se levante el servidor.

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.listen(PORT, ready)     // Ejecutamos el método listen para poder inicializar el servidor. La callback “ready” es opcional pero nos ayudará a saber cuando el servidor esté funcionando.

// console.log(process.env.NODE_ENV)