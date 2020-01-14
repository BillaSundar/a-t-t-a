import express from 'express';
import { Tablecreation, tablecreation } from './class table creation';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  var output = tablecreation;
  res.send(output.schooltable());
})

app.listen(port, () => console.log(`Atta app listening on port ${port}!`))
