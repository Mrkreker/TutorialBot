const discord = require("discord.js");
const bot = new discord.Client();

bot.on("ready", async () => {
  console.log(`[BOT] Бот успешно запущен!`)
  bot.user.setStatus(`idle`);
  let statuses = [
    `Тест`,
    `Бот`
  ]
  setInterval(async () => {
    const gencount = Math.floor(Math.random() * statuses.length)
    const statusID = statuses[gencount];
    if(gencount === 0){
    bot.user.setActivity(statusID, {
        type: "PLAYING"
    })
    } else {
      bot.user.setActivity(statusID, {
        type: "WATCHING"
    })
    }
  }, 5000)
});

bot.on('message', msg => {
  if (msg.content === '!test') {
    msg.reply('Тест');
  } else if (msg.content === '!MrKreker') {
    msg.reply('Крекер');
  } else if (msg.content === '!avatar') {
    msg.reply(msg.author.displayAvatarURL());
  }
});

bot.login("ТОКЕН")
