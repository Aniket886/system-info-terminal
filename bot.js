const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('7595602145:AAGs-hqmU6IjR-G6j7ICnQT0HhiN8vo25iE', { polling: true });

const adminChatId = '5148211299'; // Replace with your chat ID
const approvalCode = '3301'; // Predefined approval code

// Command handler for /approve <code>
bot.onText(/\/approve (.+)/, (msg, match) => {
  const userId = msg.from.id;
  const code = match[1]; // Extract the approval code

  // Check if the code is correct
  if (code === approvalCode) {
    // Inform the admin of the approval request
    bot.sendMessage(adminChatId, `User ${msg.from.first_name} is requesting approval with code: ${code}`);

    // Respond to the user
    bot.sendMessage(userId, 'Your request has been approved! You can now use the bot.');

    // Optionally, add the user to a "approved" list or send other permissions
    // For example, you could save userId in a database to track approved users
  } else {
    // Respond to the user if the code is incorrect
    bot.sendMessage(userId, 'Invalid approval code. Please try again.');
  }
});

// Admin approval handler (just an example, can be extended)
bot.onText(/\/approveadmin (.+)/, (msg, match) => {
  const code = match[1];
  if (code === approvalCode) {
    bot.sendMessage(msg.chat.id, `Admin has approved the bot functionality.`);
  } else {
    bot.sendMessage(msg.chat.id, `Admin: Invalid code. Approval failed.`);
  }
});
