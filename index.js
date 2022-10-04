const Discord = require('discord.js');
const client = new Discord.Client(); 
const {ActivityType} = require("discord.js");
let {readdirSync} = require('fs');

client.config = require('./config.js');
client.comandos = new Discord.Collection();


for (const file of readdirSync('./comandos/')) //bucle para leer los archivos de la carpeta comandos
{ 
	if (!file.endsWith(".js")) return;//Si el archivo no es un .js corta el proceso
	let fileName = file.substring(0, file.length - 3);

	let fileContents = require(`./comandos/${file}`);
	client.comandos.set(fileName, fileContents);//Lee y ejecuta los comandos de la carpeta comandos
}

for (const file of readdirSync('./eventos/')) //Bucle para leer los archivos de la carpeta eventos
{ 
	if (!file.endsWith(".js")) return; //Si el archivo no es un .js corta el proceso
	let fileName = file.substring(0, file.length - 3);//borra el .js del nombre 

	let fileContents = require(`./eventos/${file}`);

	client.on(fileName, fileContents.bind(null, client));
	delete require.cache[require.resolve(`./eventos/${file}`)];
}

client.login(client.config.token) //Proceso de inicio de sesion del bot
	.then(() => { 
		console.log(`Estoy listo, soy ${client.user.tag}`);

	})
	.catch((err) => {
		console.error("Error al iniciar sesión: " + err);
		
	});