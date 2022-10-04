const Discord = require("discord.js");
let comando = 'help';
let description = 'Display the lazybot commands!';
module.exports = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#5DADE2')
        .setDescription('Lazybot command list')
        .addFields(
            { name: 'hello', value: 'Say hello to lazybot' },
            { name: 'beauty', value: 'Evaluates someone beauty!' },
            { name: 'conch', value: 'Ask something to the magic conch, it knows everithing!' },
            { name: 'cookie', value: 'Give a cookie to your friend' },
        );

    message.channel.send({embed})
};
