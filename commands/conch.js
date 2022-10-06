const { SlashCommandBuilder } = require("discord.js");

module.exports =  
{    
  data: new SlashCommandBuilder()
  .setName('conch')
  .setDescription('Ask something to the magic conch, it knows everything!')
  .addStringOption(option => option.setName('question').setDescription('Put your question here').setRequired(true)),
  async execute(interaction)
  {
    const question = interaction.options.getString('question')
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
    return interaction.reply("You asked: "+ question +"\nThe magic conch says: " + rpts[Math.floor(Math.random() * rpts.length)]);
  }
};