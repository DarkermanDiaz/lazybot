const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('ora')
    .setDescription('ORA ORA ORA'),
  async execute(interaction)
  {
      const embed = new EmbedBuilder()
        .setDescription(`${interaction.user}` + " did the ora ora")
        .setColor(3447003)
        .setImage("https://media.tenor.com/images/95fadce08619136ec90dc820aaf405a1/tenor.gif");

      interaction.reply({ embeds:[embed] });
  }
};
