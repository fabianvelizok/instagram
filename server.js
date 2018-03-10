var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram | Home' });
});

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram | Sign In' });
});

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Platzigram | Sign Up' });
});

app.listen(3000, function (err) {
  if (err) return console.err(err);

  console.log('Listening on port 3000');
});
