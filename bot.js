const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "519658925554139150"; 
var channel = "519658925554139154";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Jxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-SapmJxco-Sapm')
    },305);
})


client.on('message', message => {
    if(message.content.startsWith('!say')) {
    if(message.author.id !== "302536427235704832") return;
    var args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(args);
    }
    });

client.login(process.env.BOT_TOKEN);
