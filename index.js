const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.id === '651858294478078002') {
    console.log(msg.author.client.user.tag)
    msg.react('🍌').then(() => msg.react('🐒'));
  }
});

client.login(config.token);
