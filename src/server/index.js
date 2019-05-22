const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/../../dist`))

const port = +(process.env.BILLING_PORT || 3210)
app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})
