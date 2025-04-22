require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: 'Too many requests from this IP, please try again after a minute',
});
app.use(limiter);

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle Telegram POST
app.post('/send-message', async (req, res) => {
  const message = req.body.message;

  if (!message || message.trim().length === 0) {
    return res.status(400).json({ success: false, error: 'Message cannot be empty' });
  }

  const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  const payload = {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    text: message,
  };

  try {
    const response = await fetch(telegramUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (data.ok) {
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, error: data.description });
    }
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, error: 'Telegram error, try again later.' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
