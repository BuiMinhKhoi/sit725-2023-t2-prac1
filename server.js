const express = require('express');

const app = express();


app.use('/', express.static('public_html'));


app.listen(3000, () => {
  console.log('server started');
});