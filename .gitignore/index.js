const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = ("?");
bot.on('ready', function(){
    bot.user.setGame("DreamBot V1.0.0 - ?help | By PicsDream V1.4")
});

bot.on('message', message => {
        if(message.content === prefix + "help"){
            var help_embed = new Discord.RichEmbed()
                 .setColor('#ff0000')
                 .addField("Liste des Commandes :", "- ?help : Affiche les commandes du bot ! \n - ?idiscord : Affiche les informations du serveur Discord \n - ?imember : Affiche le nombre de membre du serveur Discord et le site web!")
                 .setFooter("DreamBot V1.0.0 - ?help | By PicsDream V1.4")
            message.channel.sendEmbed(help_embed);
            console.log("Commande exe (h)");
        }
        if(message.content === prefix + "idiscord"){
            var idiscord_embed = new Discord.RichEmbed()
            .setDescription("Information du serveur Discord")
            .addField("Nom du serveur Discord :", message.guild.name)
            .addField("Date de Création :", message.guild.createdAt)
            .addField("Vous avez rejoinds le serveur Discord le :", message.member.joinedAt)
            .addField("Utilisateurs sur le serveur Discord", message.guild.memberCount)
            .setFooter("DreamBot V1.0.0 - ?help | By PicsDream V1.4")
            .setColor("#1dff00")
            message.channel.sendEmbed(idiscord_embed);
            console.log("Commande exe (i)")
        }
        if(message.content === prefix + "imember"){
            var idiscord_embed = new Discord.RichEmbed()
            .setDescription("Information de nombre de membre sur le serveur Discord")
            .addField("Date de Création :", message.guild.createdAt)
            .addField("Vous avez rejoinds le serveur Discord le :", message.member.joinedAt)
            .addField("Utilisateurs sur le serveur Discord :", message.guild.memberCount)
            .addField("Objectif de nombre de membre :", "20")
            .addField("Atteint le :", "Pas encore battut")
            .addField("Site web du serveur Discord :", "https://www.picsdream.eu/")
            .setFooter("DreamBot V1.0.0 - ?help | By PicsDream V1.4")
            .setColor("#1dff00")
            message.channel.sendEmbed(idiscord_embed);
            console.log("Commande exe (im)")
        }

if (message.content.startsWith(prefix + "sondage")) {
    if (message.member.id == "396393391178645506","406428122532151307" ){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            .setTitle("Ceci est un sondage vous pouvez y répondre.")
            .setDescription("Question : ")
            .addField(thingToEcho,"Répondre avec ✅  ou  ❌")
            .setColor("#1dff00")
            .setTimestamp()
            .setFooter("DreamBot V1.0.0 - ?help | By PicsDream V1.4")
        message.guild.channels.find("name", "annonce").sendEmbed(embed)      
        .then(function(message){
            message.react("✅")
            message.react("❌")
        }).catch(function(){
        });
        }else{
            return message.reply("Not permission")  

}}});
bot.login("NDg1MDYzNDc5MDQ1MzkwMzM3.DmrGig.0BYgjuM0ZfV3Ez48KA9lOszT3bE");