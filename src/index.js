const express = require('express')
const exphbs  = require('express-handlebars');
const morgan = require("morgan");
const path = require('path');
const app = express();
const port = 3000;
// HTTP Logger
app.use(morgan('combined'));

//Template Engine
app.engine('handlebars' , exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resoures/views'));

//Route
app.get("/", (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
