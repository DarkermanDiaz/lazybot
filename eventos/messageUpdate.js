const Discord = require("discord.js");
module.exports = (client,oldMessage,newMessage) => {

    //evento message update, se ejecuta cuando un mensaje cambia (contenido, archivos, embeds)
    if(
        (oldMessage.content !== newMessage.content) && //si el contenido de los 2 mensajes no es el mismo
        newMessage.content.startsWith(client.config.prefix) && //y el nuevo contenido empieza con el prefix del bot (o sea, es un comando)
        !oldMessage.ejecutoComando //y si el mensaje viejo no ejecuto ningun comando
    ){
        client.emit("message", newMessage) //en ese caso emitimos el evento message con el nuevo message
    }
}