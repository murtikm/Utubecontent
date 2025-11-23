const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { exec } = require('child_process');

const upload = multer({ dest: '/data/uploads/' });
const app = express();
const OUTPUT='/data/output';

if (!fs.existsSync(OUTPUT)) fs.mkdirSync(OUTPUT, { recursive:true });
if (!fs.existsSync('/data/uploads')) fs.mkdirSync('/data/uploads', { recursive:true });

app.use(express.json());

app.post('/upload', upload.single('file'), (req,res)=>{
  const filename=req.file.filename;
  const outputFile = OUTPUT+'/'+filename+'.mp4';
  exec(`ffmpeg -i /data/uploads/${filename} -c:v libx264 ${outputFile}`, (err)=>{
    if(err) console.error(err);
  });
  res.status(201).json({ uploaded: req.file.originalname });
});

app.get('/videos', (req,res)=>{
  res.json(fs.readdirSync(OUTPUT));
});

app.listen(8080,()=>console.log('Backend running on 8080'));
