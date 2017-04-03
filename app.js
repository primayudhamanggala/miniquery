const express = require('express');
const app = express();

const index = require('./routes/index')

app.use(express.static("lib"))
app.set('view engine', 'ejs')


app.use('/', index)


app.listen(3000, () => {
  console.log('Live');
})
