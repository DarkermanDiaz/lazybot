const Discord = require("discord.js");
module.exports = (client, message, args) => {
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(" ");

    if (!user) return message.channel.send("Mention someone to give a cookie.");

    if (!razon) {
      razon = "No reason";
    }
    message.channel.send(
      "**" +
        user.username +
        ",** you got a :cookie: from **" +
        message.author.username +
        "**\n\n**Reason:** " +
        razon +
        "\n(づ｡◕‿‿◕｡)づ:･ﾟ✧ :cookie:"
    );
};
