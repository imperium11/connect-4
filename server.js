const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Mini Apps 4');
});

app.listen(port, () => console.log('Listening on port:4000'));

