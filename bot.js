const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'no';
var isReady = true;

function playFileInVoiceChannel(vChannel, file)
{
    vChannel.join().then(connection =>
        {
            const dispatcher = connection.playFile(file, {volume: 0.5});
            dispatcher.on("end", end => {
                vChannel.leave();
            });
        }).catch(err => console.log(err));
    isReady = true;
}

client.on('ready', () => {
    console.log("Ready!");
})

client.on('message', message => {
    if (message.content === '!james hello') {
        message.reply('Works!');
    }
    else if (isReady && message.content === '!james laugh')
    {
        isReady = false;
        var vChannel = message.member.voiceChannel;
        playFileInVoiceChannel(vChannel, './audio/laugh_track.mp3')
    }
})

client.login(token);