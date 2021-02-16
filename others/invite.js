const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using me? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('RockFire','https://cdn.discordapp.com/attachments/778600026280558617/781024479623118878/ezgif.com-gif-maker_1.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add RockFire to your discord server`, 'https://discord.com/oauth2/authorize?client_id=809157054819598356&permissions=8&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};