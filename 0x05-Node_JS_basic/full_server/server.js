import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;

// Use the routes defined in ./routes/index.js
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;