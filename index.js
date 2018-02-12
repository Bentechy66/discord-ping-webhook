var discord = require('discord-bot-webhook');
discord.hookId = 'hook id';
discord.hookToken = 'hook token';


function refreshData()
{
    x = 15;  // 15 Seconds

    discord.sendMessage('<@248158876799729664>');

    setTimeout(refreshData, x*1000);
}


refreshData(); // execute function