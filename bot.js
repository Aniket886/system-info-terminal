const TelegramBot = require('node-telegram-bot-api');

// Initialize the bot with your bot token
const bot = new TelegramBot('7595602145:AAGs-hqmU6IjR-G6j7ICnQT0HhiN8vo25iE', { polling: true });

const adminChatId = '5148211299'; // Replace with your chat ID (admin chat ID)

// Handle incoming messages (prevention of unauthorized messages)
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // If anyone joins and sends a message, block them for security
  if (chatId !== adminChatId) {
    bot.sendMessage(chatId, 'You are not authorized to use this bot. All messages are blocked for security reasons.');
    bot.kickChatMember(chatId, msg.from.id); // Optionally, kick the unauthorized user
  } else {
    // If it's the admin, allow normal use
    bot.sendMessage(adminChatId, `Admin has access. Message: ${msg.text}`);
  }
});

