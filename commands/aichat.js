const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aichat')
		.setDescription("I'm AI bot, Ask me anything!")
        .addStringOption(option =>
            option.setName('write')
                .setDescription('Write here')
                .setRequired(true)
        ),
	async execute(interaction) {
		// await interaction.reply('Pong!');
	},
};