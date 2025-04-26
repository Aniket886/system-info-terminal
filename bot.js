const TelegramBot = require('node-telegram-bot-api');

// Initialize the bot with your bot token
const bot = new TelegramBot('YOUR TOKEN', { polling: true });

const adminChatId = 'YOUR ID'; // Replace with your chat ID (admin chat ID)
const approvalCode = '3301'; // Predefined approval code

// Command handler for /approve <code>
bot.onText(/\/approve (.+)/, (msg, match) => {
  const userId = msg.from.id;
  const code = match[1]; // Extract the approval code from the message

  // Check if the code is correct
  if (code === approvalCode) {
    // Inform the admin of the approval request
    bot.sendMessage(adminChatId, `User ${msg.from.first_name} (${msg.from.id}) is requesting approval with code: ${code}`);

    // Respond to the user
    bot.sendMessage(userId, 'Your request has been approved! You can now use the bot.');

    // Optionally, add the user to a "approved" list or send other permissions
    // For example, you could save the userId in a database to track approved users
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

// Optional: you can add additional features like notifying admin if user sends a message without approval
bot.on('message', (msg) => {
  if (msg.text && !msg.text.startsWith('/approve') && !msg.text.startsWith('/approveadmin')) {
    bot.sendMessage(adminChatId, `User ${msg.from.first_name} (${msg.from.id}) sent a message: ${msg.text}`);
  }
});
