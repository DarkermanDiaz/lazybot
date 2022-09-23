const Discord = require("discord.js");
module.exports = (client, message, args) => {
    var rpts = [
      "a butterfly",
      "a toad",
      "your soul",
      "me!",
      "a lizard",
      "a flower",
      "... i dont want to answer",
      "a potato",
      "a diamond"
    ];
    if (!args.length) return message.reply("Pick someone to rate their beauty");
    message.channel.send(
      `${args}` +
        " is beautiful as: " +
        rpts[Math.floor(Math.random() * rpts.length)]
    );
};