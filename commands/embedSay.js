const {Client,SlashCommandBuilder,PermissionFlagsBits,EmbedBuilder,GatewayIntentBits} = require('discord.js');

module.exports = 
{
    data: new SlashCommandBuilder()
        .setName('announcement')
        .setDescription('Embed message creator for admin users')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option => option.setName('title').setDescription('The title of the embed').setRequired(true))
        .addStringOption(option => option.setName('body').setDescription('the main content of the embed').setRequired(true))
        .addChannelOption(option => option.setName('channel').setDescription('Choose the channel for the message').setRequired(true)),
    async execute(interaction)
    {
        const maintitle = interaction.options.getString('title');
        const mainbody = interaction.options.getString('body');
        const channel = interaction.options.getChannel('channel');

        const embed = new EmbedBuilder()
            .setColor(3447003)
            .setDescription(mainbody)
            .setTitle(maintitle);
        console.log(interaction.user);
        return channel.send({ embeds: [embed] })
    }
}