const Discord = require("discord.js");
const AudioHelper = require("./AudioPlayer.js")
const client = new Discord.Client();
const token = 'no';
var aHelper = new AudioHelper('audio.json')
var isReady = true;

client.on('ready', () => {
    console.log("Ready!");
})

client.on('message', message => {

    let channel = message.member.voiceChannel;
    let cmd = message.content.split(' ')[1];
    let input = message.content.split(' ')[2];

    if (message.content === '!james hello') {
        message.reply('Works!');
    }
    else if (isReady && cmd === 'audio') {
        isReady = false;
        isReady = aHelper.playFileInVoiceChannel(input, channel);
    }
    if (message.content === "!james channelTest")
    {
        console.log(channel.name);
    }
})

client.login(token);