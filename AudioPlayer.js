class AudioPlayer {
    constructor(filePath) {
        this.audioTracks = this.readSingleFile(filePath);
        this.tracksSize = this.audioTracks.tracks.length
    }

    readSingleFile(filePath) {
        var fs = require('fs');
        var file = JSON.parse(fs.readFileSync(filePath));
        return file;
    }

    printTracks() {
        console.log("Tracks: " + this.audioTracks.tracks);
    }

    playFileInVoiceChannel(word, vChannel) {
        let track = this.findTrackByKeyword(word)
        let path = track[0]
        let vol = track[1]
        vChannel.join().then(connection =>
            {
                const dispatcher = connection.playFile(path, {volume: vol});
                dispatcher.on("end", end => {
                    vChannel.leave();
                });
            }).catch(err => console.log(err));
        let isReady = true;
        return isReady;
    }

    findTrackByKeyword(k) {
        for (let x = 0; x < this.tracksSize; x++) {
            if (k === this.audioTracks.tracks[x].keyword) {
                let temp = new Array(2)
                temp[0] = this.audioTracks.tracks[x].path
                temp[1] = this.audioTracks.tracks[x].vol
                return(temp)
            }
        }
    }
}

module.exports = AudioPlayer;