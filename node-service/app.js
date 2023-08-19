import express from 'express'
import cors from 'cors'
import { ObjectId } from 'mongodb'
import winston from 'winston'
import db from './db/conn.mjs'

const app = express()
const port = 3000
const log = winston.createLogger({
  transports: [new winston.transports.Console()],
});

app.use(cors())

app.get('/students', async (req, res) => {
  log.info('hit the endpoint')
  let students = await db.collection('students')
  let results = await students.find({},{_id: 0}).toArray()

  res.json({
    time: new Date(),
    body: results
  })
})

app.get('/students/:id', async (req, res) => {
  log.info('hit the endpoint')
  let students = await db.collection('students')
  let results = await students.find({_id: new ObjectId(req.params.id)}).toArray()
  log.info('student found was: ' + JSON.stringify(results))
  res.json({
    time: new Date(),
    body: results
  })
})

app.get('/professors', async (req, res) => {
  log.info('hit the professors endpoint')
  let professors = await db.collection('professors')
  let results = await professors.find({},{_id: 0}).toArray()

  res.json({
    time: new Date(),
    body: results
  }) 
})

app.get('/professors/:id', async (req, res) => {
  log.info('hit the professors endpoint')
  let professors = await db.collection('professors')
  let results = await professors.find({id: req.params.id},{_id: 0}).toArray()

  res.json({
    time: new Date(),
    body: results
  }) 
})

app.listen(port, () => {
  log.info(`Example app listening on port ${port}`)
})
