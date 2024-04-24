const express = require('express')
const app = express()

app.use(express.json());

app.post('/sortNumbers', (req, res) => {
  /*
  requirement:
  only accepts an array of 10 different numbers between 0 to 100 
  and the endpoint should return the numbers in ascending order.

  assumption: (to confirm)
  - allow integer and float values
  */
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
  if (numbers.some(num => typeof num !== 'number')) {
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
  /*
  requirement:
  accepts two numbers (a, b) between 0 to 100 and the endpoint should return the sum from ‘a’ to ‘b’.
  
  assumption: (to confirm)
  - allow integer and float values
  - the 'a' and 'b' in the question are arbitrary so current implementation will add from smaller value to larger value
  - it will add the integers in the range if float values found, if a=1.1 b=1.2 then sum from a to b = 0 since no integer found?
  */
  const a = req.body.a;
  const b = req.body.b;
  if (a === undefined || b === undefined) {
    res.status(400).send({ message: "Both parameters a and b are required" });
    return;
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    res.status(400).send({ message: "Both parameters a and b must be numbers" });
    return;
  }
  if (a < 0 || a > 100 || b < 0 || b > 100) {
    res.status(400).send({ message: "Both parameters a and b must be between 0 and 100"});
    return;
  }
  let sum = 0;
  if (a === b || a > b) {
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

module.exports = app;