const { MessageReaction } = require("discord.js");

module.exports = {
    name: 'MessageReactionAdd',
    execute (interaction) {
        client.on('messageReactionAdd', (reaction, user) => {
            // Verificamos que la reaccion sea en un servidor
            if (!reaction.message.channel.guild) return;
            // Verificamos que la reaccion solo sea de miembros y no por bots
            if (user.bot) return;
            // Obtenemos los datos del mensaje donde se agrego la reacción
            let message = reaction.message;
            // Obtener los datos del servidor donde se hiso la reacción
            let guild = message.guild;
            // Obtenemos los datos del canal donde se hiso la reacción
            let channel = message.channel;
            // Obtenemos el nombre del emoji de la reacción
            let emoji = reaction.emoji.name
           
            // Enviamos un mensaje de información de la reacción agregada en un canal X 
            console.log(`El usuario **${user.username}** reacciono con el emoji ${emoji} al mensaje **${message.content}** enviado en el canal <#${channel.id}> del servidor **${guild.name}**.`)
           
           })
           
    }
}