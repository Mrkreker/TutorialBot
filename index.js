const discord = require("discord.js");
const bot = new discord.Client();

bot.on("ready", async () => {
  console.log(`[BOT] Бот успешно запущен!`)
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
