import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

import db from './db/conn.mjs'

app.use(cors())

app.get('/students', async (req, res) => {
  console.log('hit the endpoint')
  let students = await db.collection('students')
  let results = await students.find({},{_id: 0}).toArray()

  res.json({
    time: new Date(),
    body: results
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
