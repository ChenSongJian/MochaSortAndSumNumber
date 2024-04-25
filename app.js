const express = require('express')
const app = express()

app.use(express.json());

app.post('/sortNumbers', (req, res) => {
  numbers = req.body.numbers;
  if (numbers === undefined) {
    res.status(400).send({ message: "numbers parameter is required" });
    return;
  }
  if (!Array.isArray(numbers)) {
    res.status(400).send({ message: "numbers parameter must be an array" });
    return;
  } 
  if (numbers.length !== 10) {
    res.status(400).send({ message: `numbers parameter must contain exactly 10 elements, ${numbers.length} found` });
    return;
  }
  if (numbers.some(num => !(typeof num === 'number' && Number.isInteger(num)))) {
    res.status(400).send({ message: "numbers parameter must only contain integer" });
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
  const a = req.body.a;
  const b = req.body.b;
  if (a === undefined || b === undefined) {
    res.status(400).send({ message: "Both parameters a and b are required" });
    return;
  }
  if (typeof a !== 'number' || !Number.isInteger(a) || typeof b !== 'number' || !Number.isInteger(b)) {
    res.status(400).send({ message: "Both parameters a and b must be integer" });
    return;
  }
  if (a < 0 || a > 100 || b < 0 || b > 100) {
    res.status(400).send({ message: "Both parameters a and b must be between 0 and 100"});
    return;
  }
  if (a >= b) {
    res.status(400).send({ message: "a must be less than b"});
    return;
  }
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  res.status(200).send({sum: sum});
})

module.exports = app;