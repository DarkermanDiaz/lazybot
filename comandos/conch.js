const Discord = require("discord.js");
module.exports = (client, message, args) => {
    var rpts = [
      "Yes ",
      "No ",
      "Obviously ",
      "Maybe ",
      "I dont know ",
      "You already know the answer ",
      "Why would you ask something like that? ",
      "No ",
      "Of course",
      "Of course not",
      "No, just no",
    ];
    if (!args.length) return message.reply("Ask something please!");
    message.reply(
      " The magic conch says: " +
      rpts[Math.floor(Math.random() * rpts.length)]
    );
};