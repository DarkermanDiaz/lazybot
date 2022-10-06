const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('muda')
    .setDescription('MUDA MUDA MUDA'),
  async execute(interaction)
  {
    const embed = new EmbedBuilder()
        .setDescription(`${interaction.user}` + " did the ora ora")
        .setColor(3447003)
        .setImage("https://media.tenor.com/images/1f2375abdff4d5624d56a7141a47272e/tenor.gif");

      interaction.reply({ embeds:[embed] });
  }
};
