const { SlashCommandBuilder } = require('discord.js');

module.exports = 
{
  data: new SlashCommandBuilder()
  .setName('beauty')
  .setDescription('Rate how beautiful you or your friends are!')
  .addUserOption(option => option.setName('target').setDescription('The user\'s to rate').setRequired(true)),
  async execute(interaction)
  {
    const target = interaction.options.getUser('target');
    console.log(target.username);
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
    return interaction.reply(`${target}` +" is beautiful as " +rpts[Math.floor(Math.random() * rpts.length)]);
  }
}