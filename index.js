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


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

