const { Event, InteractionCollector, ComponentType } = require('discord.js');

module.exports = {
    name:'messageReactionAdd',
    async execute(reaction, user) {
        // When a reaction is received, check if the structure is partial
        if (reaction.partial) {
            // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
            try {
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }

        if (reaction.message == '1037984277339578409' && reaction.emoji.name == '✅'){//Verifica si se reacciono al mensaje correcto con la reaccion correcta
            let member = reaction.message.guild.members.cache.get(user.id);//Tomamos la informacion del miembro que reacciono al mensaje
            let memberRole = reaction.message.guild.roles.cache.find(role => role.name === "Member");//Tomamos la informacion del rol que queremos verificar
            if (!member.roles.cache.has(memberRole.id)){//Si el usuario no tiene el rol especificado
                var rpts = ["Red","Blue","Yellow","Green"];
                const answer = rpts[Math.floor(Math.random() * rpts.length)];//Elegimos una respuesta al azar
                let col = {"Red":16711680,"Blue":2123412,"Green":2067276,"Yellow":16776960}//Diccionario para establecer los colores con base a la respuesta que el usuario debe dar

                const embed = {
                    title:'Pick the '+answer+' button',
                    color: col[answer]
                };
                const embver = {
                    title:'Verified!',
                    color:col[answer]
                };
                const embwrg = {
                    title : 'Wrong answer!',
                    color:col[answer]
                };
                const contents = 
                    {
                        "type": 1,
                        "components": [
                        {
                            "style": 1,
                            "custom_id": `Red`,
                            "disabled": false,
                            "emoji": {
                            "id": null,
                            "name": `🔴`
                            },
                            "type": 2
                        },
                        {
                            "style": 1,
                            "custom_id": `Yellow`,
                            "disabled": false,
                            "emoji": {
                            "id": null,
                            "name": `🟡`
                            },
                            "type": 2
                        },
                        {
                            "style": 1,
                            "custom_id": `Blue`,
                            "disabled": false,
                            "emoji": {
                            "id": null,
                            "name": `🔵`
                            },
                            "type": 2
                        },
                        {
                            "style": 1,
                            "custom_id": `Green`,
                            "disabled": false,
                            "emoji": {
                            "id": null,
                            "name": `🟢`
                            },
                            "type": 2
                        }
                        ]
                    };
                const dcontents =  
                {
                    "type": 1,
                    "components": [
                    {
                        "style": 1,
                        "custom_id": `Red`,
                        "disabled": true,
                        "emoji": {
                        "id": null,
                        "name": `🔴`
                        },
                        "type": 2
                    },
                    {
                        "style": 1,
                        "custom_id": `Yellow`,
                        "disabled": true,
                        "emoji": {
                        "id": null,
                        "name": `🟡`
                        },
                        "type": 2
                    },
                    {
                        "style": 1,
                        "custom_id": `Blue`,
                        "disabled": true,
                        "emoji": {
                        "id": null,
                        "name": `🔵`
                        },
                        "type": 2
                    },
                    {
                        "style": 1,
                        "custom_id": `Green`,
                        "disabled": true,
                        "emoji": {
                        "id": null,
                        "name": `🟢`
                        },
                        "type": 2
                    }
                    ]
                };
                const msg = await user.send({ embeds: [embed], components:[contents], ephemeral:true });
                const collector = msg.createMessageComponentCollector({ time: 15000 });
                collector.on('collect', i => {
                    if (i.customId === answer) {//Verificamos si la respuesta es correcta
                        member.roles.add(memberRole)
                        msg.edit({ embeds: [embver],components:[dcontents]});
                    }
                    else
                    {
                        msg.edit({ embeds: [embwrg],components:[dcontents]});
                    }
                    i.deferUpdate()
                });
                
                collector.on('end', i => {
                    msg.edit({ embeds: [embed],components:[dcontents]})
                    })
            }
        }
    }
}