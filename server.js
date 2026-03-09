import 'dotenv/config';

console.log('Starting server...');

import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('Routes loaded:', typeof routes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});