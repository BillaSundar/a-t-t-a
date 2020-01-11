import express from 'express';

import { schooltable } from './code';
import { clsdiv } from './function clasdiv';
import { start } from 'repl';
import { sample } from './class school';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  var output = schooltable();
  var r1=clsdiv(sample.classRooms);
;
  res.send(`<html><body><span>${output}</span></body></html>`);
})

app.listen(port, () => console.log(`Atta app listening on port ${port}!`))
