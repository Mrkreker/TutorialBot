const discord = require("discord.js");
const bot = new discord.Client();

bot.on("ready", async () => {
  console.log(`[BOT] Бот успешно запущен!`)
  bot.user.setStatus(`idle`)
  let statuses = [
    `ТЕСТ`,
    `БОТ`
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

bot.on("message", async (message) => {
  if (message.author.bot) return;//Если автор другой бот - нет.
  if (message.channel.type == "dm") return;//Если команда в личку - нет.
  if (message.guild.id != "745678233214779402") return;//Проверяем сервер
  let channelidea = bot.channels.cache.get(`751436916251033621`)
  if(message.channel.id === channelidea.id){
    message.delete();
    let embed = new discord.MessageEmbed()
    .setTitle(`Идея от ${message.author.tag}`)
    .setDescription(`**Суть идеи: \`${message.content}\`**`)
    .addField(`**Описание смайликов**`, `**✅ - хорошая идея\n\n❌ - плохая идея**`)
    .setThumbnail(message.author.avatarURL({format: 'png', dynamic: true, size: 1024}))
    .setTimestamp();
    channelidea.send("**Внимание <@&745679592374665226> пришла новая идея по улучшению рассмотрите её**", embed).then(async (msg) => {
      await msg.react("✅");
      await msg.react("❌");
    });
  }
});

bot.login("ТОКЕН")