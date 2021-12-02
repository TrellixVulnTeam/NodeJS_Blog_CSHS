const express = require('express')
const exphbs  = require('express-handlebars');
const morgan = require("morgan");
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));

// HTTP Logger
app.use(morgan('combined'));

//Template Engine
app.engine('hbs' , exphbs.engine(
  {
    extname : '.hbs'
  }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resoures/views'));

//Route
app.get("/", (req, res) => {
  res.render('home');
});

app.get("/news", (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
