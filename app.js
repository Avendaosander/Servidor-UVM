const express = require("express")

const app = express()

app.listen(3000, ()=>{
   console.log("Servidor en linea, en el puerto 3000")
})

app.get("/", (req, res)=>{
   res.send("Este es un texto desde el servidor")
   console.log("Respuesta del servidor")
})
