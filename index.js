require("dotenv").config(); // Подключаем dotenv для работы с переменными окружения
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan"); // Мидлвэр для логгирования HTTP-запросов
const app = express();


const PORT = process.env.PORT || 3000;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Проверяем, заданы ли все необходимые переменные окружения
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error(
    "Ошибка: TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID должны быть заданы в .env файле."
  );
  process.exit(1);
}
app.use(cors());
app.use(express.json());
app.use(morgan("combined")); 
app.use(express.static(path.join(__dirname, "public")));

app.post("/send-message", async (req, res) => {
  try {
    const message = "По ссылке перешли";
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await axios.post(telegramUrl, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    });

    res.status(200).send("Message sent");
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).send("Error sending message");
  }
});


app.use((req, res) => {
  res.status(404).send("Страница не найдена");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
