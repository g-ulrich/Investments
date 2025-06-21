const {Discord} = require('./discord');

class BackgroundClass {
    constructor(props) {
        this.discord = new Discord();
        this.log('```javascript\nHello: ${new Date()}```');
        this.id = setInterval(()=>{
            this.log('```javascript\nHello: ${new Date()}```');
        }, 60000);
    }

    log(txt){
        this.discord.sendMessage(txt);
    }
}


module.exports = {
    BackgroundClass
};