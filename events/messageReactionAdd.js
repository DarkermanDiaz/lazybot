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
        let memberRole = reaction.message.guild.roles.cache.find(role => role.name === "Member");

        if (reaction.message == '1037984277339578409' && reaction.emoji.name == '✅'){//Verifica si se reacciono al mensaje correcto con la reaccion correcta
            let member = reaction.message.guild.members.cache.get(user.id);
            if (!member.roles.cache.has(memberRole.id)){
                console.log("no member role")
                var rpts = [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green"
                  ];
                const answer = rpts[Math.floor(Math.random() * rpts.length)];
                var col = 0;

                    if(answer =="Red"){col = 16711680};
                    if(answer =="Blue"){col = 3447003};
                    if(answer =="Green"){col = 5763719};
                    if(answer =="Yellow"){col = 16776960};

                const embed = {
                    title:'Pick the '+answer+' button',
                    color: col
                };
                const embver = {
                    title:'Verified!',
                    color:col
                };
                const embwrg = {
                    title : 'Wrong answer!',
                    color:col
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
                    if (i.customId === answer) {
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