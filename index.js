const Discord = require('discord.js');
const client = new Discord.Client();

const fetch = require("node-fetch")

const config = require("./config.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.author.id === '651858294478078002') {
    await msg.react('🍌');
    await msg.react('🐒');
  }

  if (msg.mentions.members.first().user.id === client.user.id) {
    msg.channel.send('uh, uh, ah, ah', { tts: true });
  }

  if (msg.content === '🍌') {
    const res = await fetch("https://api.tenor.com/v1/search?q=funny-monkey&limit=50");
    const body = await res.json();
    const gifs = body.results.map(res => res.media[0].gif.url);
    msg.channel.send(gifs[Math.floor(Math.random()*gifs.length)]);   
  }
});

client.login(config.token);
