import express from 'express';
import { Tablecreation } from './tablegenerator';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  var output =new Tablecreation;
  res.send(output.generator());
})

app.listen(port, () => console.log(`Atta app listening on port ${port}!`))
