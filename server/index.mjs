import {Mail} from './mail.mjs';

import express from 'express';

const app = express();
const port = 3020; // Вы можете изменить порт по вашему выбору

// Обработчик для базового маршрута
app.get('/', (req, res) => {
    res.send('Привет, это ваш первый сервер на Node.js!');
});

app.post('/mail', async (req, res) => {
    return res.json({result: new Mail().send("", "")})
})

// Слушаем указанный порт
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

