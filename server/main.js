import express from 'express';
import multer from 'multer';
import {parseFile} from './parser';
import {get, list} from './file';
import fs from 'fs';

if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

const upload = multer({ dest: 'uploads/' })

const app = express()
const port = process.env.PORT || 3000

// To enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('*', upload.any(), (req, res, next) => {
  next();
})
app.use('/uploads', express.static('uploads'));

app.get('/files', (req, res) => res.send(list()))

app.post('/files', (req, res) => {
  parseFile(req.files[0]);
  res.send(req.files[0].filename);
})

app.get('/files/:id', (req, res) => res.send(get(req.params.id)));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))