let express = require('express')

let app = express()

app.get('/user', (req, res) => {
  res.json(
    {name: 'hangfeng'}
  )
})

app.listen(3000)