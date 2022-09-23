const Discord = require('discord.js')
module.exports = (client, message, args) => {
  let member =
  message.mentions.members.first() || //Mención o
  message.guild.members.resolve(args[0]) || //Id o
  message.member; //Autor

const embed = new Discord.MessageEmbed()
  .setImage(member.user.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
  .setColor(member.displayHexColor)
  .setFooter(member.id === message.member.id ? `Tu avatar ${member.displayName}` : `Avatar de ${member.displayName}`);

message.channel.send({embed});
};