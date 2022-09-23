const Discord = require('discord.js');
const client = new Discord.Client(); 
const {ActivityType} = require("discord.js");
let {readdirSync} = require('fs');

const clientId = 381693088759939072;

client.config = require('./config.js');
client.comandos = new Discord.Collection();

for (const file of readdirSync('./comandos/')) { 
	if (!file.endsWith(".js")) return;
	let fileName = file.substring(0, file.length - 3);

	let fileContents = require(`./comandos/${file}`); 
	client.comandos.set(fileName, fileContents);
}


for (const file of readdirSync('./eventos/')) { 
	if (!file.endsWith(".js")) return; 
	let fileName = file.substring(0, file.length - 3);

	let fileContents = require(`./eventos/${file}`);

	client.on(fileName, fileContents.bind(null, client));
	delete require.cache[require.resolve(`./eventos/${file}`)];
}

client.login(client.config.token) 
	.then(() => { 
		console.log(`Estoy listo, soy ${client.user.tag}`);
		 

	})
	.catch((err) => {
		console.error("Error al iniciar sesión: " + err);
		
	});

	(async () => {
		try {
			console.log(`Started refreshing ${commands.length} application (/) commands.`);
	
			const data = await rest.put(
				Routes.applicationGuildCommands(clientId),
				{ body: commands },
			);
	
			console.log(`Successfully reloaded ${data.length} application (/) commands.`);
		} catch (error) {
			console.error(error);
		}
	});