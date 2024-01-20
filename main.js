const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"));
app.set('view engine','ejs')
app.get('/', (req, res) => {
  let rand = Math.floor(Math.random()*10)
  res.render('index',{rand:rand})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
