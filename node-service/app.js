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

// insert a student into the database
app.use(express.json())
app.post('/newStudent', async (req, res) => {
  log.info('hit the endpoint')
  let students = await db.collection('students')
  log.info('body is: ' + JSON.stringify(req.body))
  let results = {};
  let student = req.body;
  if (student._id == '' || student._id == null) {
    delete student._id
    results = await students.insertOne(student)
  } else {
    let student_id = new ObjectId(student._id)
    delete student._id
    results = await students.updateOne({_id: student_id}, {$set: req.body})
  }
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
