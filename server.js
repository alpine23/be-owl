const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Backend App');
});

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});
