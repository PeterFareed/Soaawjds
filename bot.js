const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530740118089236502")
setInterval(function() {
channel.send(` Mustafa Mustafa Mustafa Mustafa `);
}, 30)
})

client.login(process.env.BOT_TOKEN);