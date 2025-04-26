const TelegramBot = require('node-telegram-bot-api');

// Initialize the bot with your bot token
const bot = new TelegramBot('7595602145:AAGs-hqmU6IjR-G6j7ICnQT0HhiN8vo25iE', { polling: true });

const adminChatId = '5148211299'; // Replace with your chat ID (admin chat ID)

// Command handler for /start (this is where the bot responds to users)
bot.onText(/\/start/, (msg) => {
  const userId = msg.from.id;
  bot.sendMessage(userId, 'This bot is designed for system information reporting. It will automatically collect and send the data to the admin.');
});

// Admin receives data
bot.on('message', (msg) => {
  if (msg.text) {
    bot.sendMessage(adminChatId, `User ${msg.from.first_name} (${msg.from.id}) sent a message: ${msg.text}`);
  }
});
