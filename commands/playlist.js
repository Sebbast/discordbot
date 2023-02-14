const { SlashCommandBuilder } = require ("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("music"),

    async execute(interaction) {
        await interaction.reply("https://www.youtube.com/watch?v=CL4_PfIeQKU&list=PLNvleMalwLP-syDdZwORb8Rl2j2HpIADA")
    }
}