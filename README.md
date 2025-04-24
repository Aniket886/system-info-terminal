⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠈⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿             
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⢀⣠⣤⣤⣤⣤⣄⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠾⣿⣿⣿⣿⠿⠛⠉⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⣤⣶⣤⣉⣿⣿⡯⣀⣴⣿⡗⠀⠀⠀⠀⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⡈⠀⠀⠉⣿⣿⣶⡉⠀⠀⣀⡀⠀⠀⠀⢻⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡇⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠉⢉⣽⣿⠿⣿⡿⢻⣯⡍⢁⠄⠀⠀⠀⣸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠐⡀⢉⠉⠀⠠⠀⢉⣉⠀⡜⠀⠀⠀⠀⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠿⠁⠀⠀⠀⠘⣤⣭⣟⠛⠛⣉⣁⡜⠀⠀⠀⠀⠀⠛⠿⣿⣿⣿
⡿⠟⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⡀⠀⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
https://linktr.ee/D4RKMATRIX    
https://aniket886.github.io/system-info-terminal/                                
https://youtu.be/RjVSFTv51Fc

### Signature

🛡️ Built by:

𝐀𝐍𝐈𝐊𝐄𝐓 𝐓𝐄𝐆𝐆𝐈𝐍𝐀𝐌𝐀𝐓𝐇

Cybercrime Investigator | CEH | Darkweb Researcher | TryHackMe Top 2

---

# System Info Terminal Telegram Bot

A simple and efficient Telegram bot to gather system and browser information from a user and send it to a designated admin. The bot can be used for various purposes, such as tracking system data and assisting with security-related tasks.

## Features

- Collects system information like browser, OS, and system data from users.
- Sends the collected information to an admin via Telegram.
- Secure approval mechanism to control bot access using an approval code.
- Easy integration with web services and other platforms.

## Getting Started

### Prerequisites

To run this bot, you will need:
- Node.js installed on your system.
- Telegram Bot API token (You can get this by creating a bot on Telegram via BotFather).
- An admin Telegram chat ID (You can get this by messaging the bot and using the `getUpdates` method from the Telegram API).
  
### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/system-info-terminal.git
   cd system-info-terminal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your bot token and admin chat ID in the `bot.js` file.

4. Run the bot:
   ```bash
   node bot.js
   ```

### Usage

1. Start a chat with your bot on Telegram.
2. Send the `/approve <code>` command to request approval from the admin.
3. The admin can approve the request by using the `/approveadmin <code>` command.
4. Once approved, you can use the bot to gather system and browser information and send it to the admin.

### API Endpoints

#### POST /send-message

This endpoint allows sending a message from the bot.

**Request Payload**:
```json
{
  "message": "Your message here"
}
```

### Example Request

```bash
curl -X POST https://your-app.onrender.com/send-message \
  -H "Content-Type: application/json" \
  -d '{"message": "Test message"}'
```

### Example Response

```json
{
  "status": "success",
  "message": "Message sent successfully"
}
```

## Contributing

Feel free to open issues and submit pull requests. We welcome contributions to improve this bot and its features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Signature

🛡️ Built by:

𝐀𝐍𝐈𝐊𝐄𝐓 𝐓𝐄𝐆𝐆𝐈𝐍𝐀𝐌𝐀𝐓𝐇

Cybercrime Investigator | CEH | Darkweb Researcher | TryHackMe Top 2

---
