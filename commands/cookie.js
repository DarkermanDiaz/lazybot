const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('cookie')
    .setDescription('Give cookies to your friens!')
    .addUserOption(option => option.setName('target').setDescription('Choose someone to send a cookie').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The reason of your gift')),
    async execute(interaction)
    {
      const target = interaction.options.getUser('target');
      const sender = interaction.user;
      const razon = interaction.options.getString('reason');

      if (!razon) return interaction.reply(`${target}` +", you got a :cookie: from " + `${sender}`+'\n\n(づ｡◕‿‿◕｡)づ:･ﾟ✧ :cookie:')
      else interaction.reply(`${target}` +", you got a :cookie: from" + `${sender}` +"\n\n**Reason:** " +razon +"\n(づ｡◕‿‿◕｡)づ:･ﾟ✧ :cookie:");
    }
};
