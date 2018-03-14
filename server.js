var express = require('express');
var app = express();
var multer = require('multer')
var extension = require('file-extension')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${extension(file.originalname)}`);
  }
});

var upload = multer({ storage: storage })

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

app.get('/api/pictures', function(req, res) {
  var pictures = [
    {
      user: {
        username: 'fabianvelizok',
        avatar: 'https://static.platzi.com/media/avatars/fabian.h.veliz_99768843-1603-4154-9164-f5b33ae29916.jpg'
      },
      url: 'http://next.materializecss.com/images/sample-1.jpg',
      likes: 2,
      liked: true,
      createdAt: new Date('11-10-2017').getTime()
    },
    {
      user: {
        username: 'elloco',
        avatar: 'https://static.platzi.com/media/avatars/fabian.h.veliz_99768843-1603-4154-9164-f5b33ae29916.jpg'
      },
      url: 'http://next.materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    }
  ];

  setTimeout(function () {
    res.send(pictures);
  }, 2000);
});

app.post('/api/pictures', function (req, res, next) {
  var file = upload.single('picture');

  file(req, res, function(err) {
    if (err) return res.send(500, 'Error uploading file.');
    res.send('File uploaded successfully.');
  });
});

app.listen(3000, function (err) {
  if (err) return console.err(err);

  console.log('Listening on port 3000');
});
