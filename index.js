const Discord = require("discord.js");
const client = new Discord.Client();
var colors = require('colors');
const setTitle = require('node-bash-title');
const logs = require("discord-logs")
logs(client);
const readline = require('readline');
const settings = require('./settings.json')

client.on("ready", () => {
    console.clear();
    console.log("Message Logger")

});
