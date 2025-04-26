const TelegramBot = require('node-telegram-bot-api');

// Initialize the bot with your bot token
const bot = new TelegramBot('7595602145:AAGs-hqmU6IjR-G6j7ICnQT0HhiN8vo25iE', { polling: true });

const adminChatId = '5148211299'; // Replace with your chat ID (admin chat ID)

// Restrict the bot to only respond to messages from the admin
bot.on('message', (msg) => {
  const userId = msg.from.id;

  // If the message is not from the admin, do not send any response
  if (userId !== adminChatId) {
    // Optionally, you can log any unauthorized access attempt
    console.log(`Unauthorized access attempt by user ${msg.from.first_name} (${userId}). No response sent.`);
    return;  // Do nothing for non-admin users
  }

  // If the message is from the admin, process it
  if (msg.text) {
    // Forward the message to the admin (only if it's from the admin)
    bot.sendMessage(adminChatId, `Admin received: ${msg.text}`);
  }

  // You can also add logic here for other types of messages (like images)
});

// Handle image sending (base64 image data) - this will only work for the admin
bot.onText(/\/sendimage (.+)/, async (msg, match) => {
  const userId = msg.from.id;
  
  // Check if the message is from the admin
  if (userId !== adminChatId) {
    console.log(`Unauthorized image request by user ${msg.from.first_name} (${userId}). No image sent.`);
    return;  // Do nothing for non-admin users
  }

  const base64Image = match[1]; // Get base64 image from the message

  if (base64Image) {
    const tgURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendPhoto`;
    
    try {
      // Send the base64 image to the admin
      const response = await fetch(tgURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: adminChatId,
          photo: base64Image // Sending the base64 image directly
        })
      }).then(r => r.json());

      if (response.ok) {
        bot.sendMessage(adminChatId, 'Image sent successfully!');
      } else {
        bot.sendMessage(adminChatId, 'Failed to send the image.');
      }
    } catch (error) {
      console.error('Error sending image:', error);
      bot.sendMessage(adminChatId, 'Error sending the image.');
    }
  } else {
    bot.sendMessage(adminChatId, 'No image data provided.');
  }
});
