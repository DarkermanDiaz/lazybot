const Discord = require("discord.js");
module.exports = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setDescription(message.author.username + " did the muda muda")
      .setColor(3447003)
      .setImage(
        "https://media.tenor.com/images/1f2375abdff4d5624d56a7141a47272e/tenor.gif"
      );

    message.channel.send({ embed });
};
