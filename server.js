const Discord = require('discord.js');


client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
  if msg(msg.content === 'ping') {
  msg.reply('Pong');
  }
if(msg.content === 'How do i get script?')
}};
msg.reply('Yscript bot is down!')


client.login(process.env.TOKEN);