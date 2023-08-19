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

app.get('/students/:id', async (req, res) => {
  console.log('hit the endpoint')
  let students = await db.collection('students')
  let results = await students.find({id: req.params.id},{_id: 0}).toArray()

  res.json({
    time: new Date(),
    body: results
  })
})

app.get('/professors', async (req, res) => {
  console.log('hit the professors endpoint')
  let professors = await db.collection('professors')
  let results = await professors.find({},{_id: 0}).toArray()

  res.json({
    time: new Date(),
    body: results
  }) 
})

app.get('/professors/:id', async (req, res) => {
  console.log('hit the professors endpoint')
  let professors = await db.collection('professors')
  let results = await professors.find({id: req.params.id},{_id: 0}).toArray()

  res.json({
    time: new Date(),
    body: results
  }) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
