const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/sortNumbers', (req, res) => {
  numbers = req.body.numbers;
  if (numbers === undefined) {
    res.status(400).send({ message: "numbers parameter is required" });
    return;
  }
  if (numbers.length !== 10) {
    res.status(400).send({ message: `numbers parameter must contain exactly 10 elements, ${numbers.length} found` });
    return;
  }
  if (numbers.some(isNaN)) {
    res.status(400).send({ message: "numbers parameter must only contain numbers" });
    return;
  }
  if (numbers.some(n => n < 0 || n > 100)) {
    res.status(400).send({ message: "numbers parameter must only contain numbers between 0 and 100" });
    return;
  }
  if (new Set(numbers).size !== numbers.length) {
    res.status(400).send({ message: "numbers parameter must not contain duplicate values" });
    return;
  }
  numbers.sort((a, b) => a - b);
  res.status(200).send({ numbers: numbers });
})

app.post('/sumNumbers', (req, res) => {
  console.log(req.body);
  const a = req.body.a;
  const b = req.body.b;
  if (a === undefined || b === undefined) {
    res.status(400).send({ message: "Both parameters a and b are required" });
    return;
  }
  if (isNaN(a) || isNaN(b)) {
    res.status(400).send({ message: "Both parameters a and b must be numbers" });
    return;
  }
  if (a < 0 || a > 100 || b < 0 || b > 100) {
    res.status(400).send({ message: "Both parameters a and b must be between 0 and 100"});
    return;
  }
  let sum = 0;
  if (a === b) {
    sum = a;
  } else if (a > b) {
    for (let i = Math.ceil(b); i <= Math.floor(a); i++) {
      sum += i;
    }
  } else {
    for (let i = Math.ceil(a); i <= Math.floor(b); i++) {
      sum += i;
    }
  }
  res.status(200).send({sum: sum});
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

