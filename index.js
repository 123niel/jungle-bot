const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.id === '651858294478078002') {
    msg.react('🍌').then(() => 
      msg.react('🐒')
    );
  }

  if(msg.mentions.has(client.user.id) || msg.content.includes('🐒')) {
    msg.channel.send('uh, uh, ah, ah', { tts: true });
  }
});

client.login(config.token);
