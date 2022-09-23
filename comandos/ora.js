const Discord = require("discord.js");
module.exports = (client, message, args) => {
    
    const embed = new Discord.MessageEmbed()
      .setDescription(message.author.username + " did the ora ora")
      .setColor(3447003)
      .setImage(
        "https://media.tenor.com/images/95fadce08619136ec90dc820aaf405a1/tenor.gif"
      );

    message.channel.send({ embed });
};
