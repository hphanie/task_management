const dotenv = require("dotenv")
dotenv.config();

const express = require('express');
const app = express();

const connectToDB = require('./api/config/database');
connectToDB();

const logMiddleware   = require('./api/middlewares/logMiddleware');
const errorMiddleware = require('./api/middlewares/errorMiddleware');
const { requireAuth } = require('./api/middlewares/authMiddleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logMiddleware);
app.use(errorMiddleware);

app.use('/api/auth',        require('./api/routes/auth.route'));
app.use('/api/task',       require('./api/routes/task.route'));

app.get('/', (req, res) => {
  res.send("Bienvenue sur l’API TASK_MANAGEMENT !");
});

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
