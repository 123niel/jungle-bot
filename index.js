const Discord = require('discord.js');
const client = new Discord.Client();

const fetch = require("node-fetch")

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

  if (msg.mentions.has(client.user.id) || msg.content.includes('🐒')) {
    msg.channel.send('uh, uh, ah, ah', { tts: true });
  }

  if (msg.content === '🍌') {
    fetch("https://api.tenor.com/v1/search?q=funny-monkey")
    .then(res => res.json())
    .then(body => {
      const gifs = body.results.map(res => res.media[0].gif.url);
      msg.channel.send(gifs[Math.floor(Math.random()*gifs.length)]);
    })
  }
});

client.login(config.token);
