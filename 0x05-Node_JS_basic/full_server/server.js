import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

// Use the routes defined in ./routes/index.js
app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
