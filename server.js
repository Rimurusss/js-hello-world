const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1>สวัสดีเมืองพะเยาจ้า55555</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})