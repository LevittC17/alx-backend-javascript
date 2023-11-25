const express = require('express');
const router = require('./routes/index.js');

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
