const{SlashCommandBuilder,PermissionFlagsBits} = require('discord.js')

module.exports = 
{
    data: new SlashCommandBuilder()
        .setName('rules')
        .setDescription('Show the rules of lazycoders community')
        .addChannelOption(option => option.setName('channel').setDescription('Choose the channel where you want to post the rules!(Only admin option)')),

    async execute(interaction)
    {
        const channel = interaction.options.getChannel('channel')
        const embed = 
        {
            color:3447003,
            title:'Rules of lazycoders community',
            fields: [
                {
                    name: 'Rule 1',
                    value: 'Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated. (avoid controversial themes, this is a community focused on software development',
                },
                {
                    name: 'Rule 2',
                    value: 'No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member. This includes DMing fellow members.',
                },
                {
                    name: 'Rule 3',
                    value: 'No age-restricted or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content.',
                },
                {
                    name: 'Rule 4',
                    value: 'If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space!',
                },
                {
                    name: 'Rule 5',
                    value: 'Tickets are only for problems on the discord server, not for postulate or offering services.',
                },
            ],
        
        }
        if(!channel) return interaction.reply({ embeds:[embed] })
        else if (!interaction.memberPermissions.has("ADMINISTRATOR")) return interaction.reply({ embeds:[embed] });
        
        return channel.send({ embeds: [embed] }), interaction.reply({content : 'Done!', ephemeral : true})
        
    }
}