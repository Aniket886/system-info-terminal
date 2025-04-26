require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const FormData = require('form-data'); // For sending images

const app = express();
const port = process.env.PORT || 3000;

/* ─────────── middleware ─────────── */
app.use(express.json());
app.use(cors());

app.use(rateLimit({
  windowMs: 60 * 1000,          // 1 minute
  max: 5,                       // 5 requests/IP/min
  message: 'Too many requests, try again later.'
}));

/* ─────────── POST /send-message ─────────── */
app.post('/send-message', async (req, res) => {
  const { message, image } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ success: false, error: 'Message cannot be empty' });
  }

  const tgURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    // Send the message as text
    const tgRes = await fetch(tgURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message
      })
    }).then(r => r.json());

    if (tgRes.ok) {
      // If there's an image, send it after the message
      if (image) {
        const tgPhotoURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendPhoto`;

        const form = new FormData();
        form.append('chat_id', process.env.TELEGRAM_CHAT_ID);
        form.append('photo', image); // Image should be in base64 format

        // Send image
        const tgImageRes = await fetch(tgPhotoURL, {
          method: 'POST',
          body: form
        }).then(r => r.json());

        if (tgImageRes.ok) {
          return res.json({ success: true });
        } else {
          return res.status(400).json({ success: false, error: tgImageRes.description });
        }
      } else {
        return res.json({ success: true });
      }
    } else {
      return res.status(400).json({ success: false, error: tgRes.description });
    }
  } catch (err) {
    console.error('Telegram error:', err);
    res.status(500).json({ success: false, error: 'Telegram request failed' });
  }
});

/* ─────────── simple root check ─────────── */
app.get('/', (_, res) =>
  res.send('System‑Info API running. POST /send-message to forward data.')
);

/* ─────────── start server ─────────── */
app.listen(port, () =>
  console.log(`🚀  API listening on port ${port}`)
);
