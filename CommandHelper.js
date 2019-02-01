class CommandHelper{

    constructor(filePath) {
        this.commands = this.readSingleFile(filePath);
    }

    readSingleFile(filePath) {
        var fs = require('fs');
        var file = JSON.parse(fs.readFileSync(filePath));
        return file;
    }

    printCommands() {
        console.log(this.commands.commandName);
    }

}

module.exports = CommandHelper;

let commands = new CommandHelper('commands.json');
commands.printCommands();