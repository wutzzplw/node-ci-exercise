const express = require('express');
const app = express();
const port = 3000;

app.get('/calculate', (req, res) => {
  // ข้อมูลจาก URL Query Parameter (user_input) ซึ่งเป็น Untrusted Data
  const expression = req.query.expr;

  if (expression) {
    try {
      // โค้ดนี้มีช่องโหว่! เพราะใช้ eval() กับข้อมูลจากผู้ใช้โดยตรง
      // CodeQL จะตรวจจับการไหลของข้อมูลจาก req.query.expr ไปยัง eval()
      const result = eval(expression);
      res.send(`Result: ${result}`);
    } catch (e) {
      res.status(400).send("Invalid expression.", e.message);
    }
  } else {
    res.send("Please provide an expression in the 'expr' query parameter. e.g., /calculate?expr=10%2B5");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});