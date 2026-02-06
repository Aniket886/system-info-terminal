<div align="center">

<pre>
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
</pre>

# 💀 SYSTEM INFO TERMINAL
### TELEGRAM RECONNAISSANCE BOT

[![Status](https://img.shields.io/badge/Status-Operational-brightgreen?style=for-the-badge&logo=signal)](https://github.com/aniket886)
[![Platform](https://img.shields.io/badge/Platform-Node.js-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Telegram](https://img.shields.io/badge/Telegram-Bot-2CA5E0?style=for-the-badge&logo=telegram)](https://telegram.org/)

[🔗 LinkTree](https://linktr.ee/D4RKMATRIX) • [🌐 Live Terminal](https://aniket886.github.io/system-info-terminal/) • [🎥 Watch Demo](https://youtu.be/RjVSFTv51Fc)

</div>

---

## ⚡ Overview
**System Info Terminal** is a specialized telemetry tool designed to extract precise system environment data and geolocation coordinates. It acts as a bridge between a target device and the admin, discreetly piping critical information directly to a secure Telegram channel.

## 🛠️ Capabilities

* **Fingerprinting:** Extracts detailed Browser, OS, and System configurations.
* **Precision Geolocation:**
    * Utilizes Wi-Fi triangulation and GPS APIs.
    * **Status:** `[TESTED]` - High accuracy for target acquisition.
* **Secure Relay:** Direct encrypted transmission to Admin via Telegram API.
* **Access Control:** Custom approval codes (`/approve`) to prevent unauthorized usage.
* **Webhooks:** Integrated API endpoints for remote triggering.

---

## 🚀 Deployment Sequence

### 1. Prerequisites
* Node.js Environment
* Telegram Bot Token (via [@BotFather](https://t.me/botfather))
* Admin Chat ID (Retrieve via `getUpdates`)

### 2. Installation
Initialize the repository and install dependencies:

```bash
git clone [https://github.com/yourusername/system-info-terminal.git](https://github.com/yourusername/system-info-terminal.git)
cd system-info-terminal
npm install
