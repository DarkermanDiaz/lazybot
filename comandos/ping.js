const Discord = require("discord.js");
module.exports = (client, message, args) => {
  message.channel.send("pong!");
  console.log("ping!")
};
