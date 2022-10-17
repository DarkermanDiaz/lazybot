const{SlashCommandBuilder,PermissionFlagsBits} = require('discord.js')

module.exports = 
{
    data: new SlashCommandBuilder()
        .setName('links')
        .setDescription('Show the official links of lazycoders community')
        .addChannelOption(option => option.setName('channel').setDescription('Choose the channel where you want to post the rules!(Only admin option)')),

    async execute(interaction)
    {
        const channel = interaction.options.getChannel('channel')
        const embed = 
        {
            color:3447003,
            title:'Official links of lazycoders',
            thumbnail:{url:'https://images-ext-1.discordapp.net/external/Ar4aGr9IOiNAl_af4wd0B8bjWeJyccwhorN-H-QAP6Q/https/pbs.twimg.com/profile_images/1566765061242224646/98T_rqnJ_normal.jpg'},
            fields: [
                {
                    name: 'Official Page',
                    value: 'https://lazycoders.io/home',
                },
                {
                    name: 'Instagram',
                    value: 'https://www.twitter.com/lazycodersNFT',
                },
                {
                    name: 'Twitter',
                    value: 'https://www.instagram.com/lazycodersnft/',
                },
            ],
        
        }
        if(!channel) return interaction.reply({ embeds:[embed] })
        else if (!interaction.memberPermissions.has("ADMINISTRATOR")) return interaction.reply({ embeds:[embed] });
        
        return channel.send({ embeds: [embed] }), interaction.reply({content : 'Done!', ephemeral : true})
        
    }
}