const express = require('express')
const Task = require('../models/Task.model')

const router = express.Router()

router.post('/task', async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    const task = await Task.create(req.body)
    res.send(task)
  } catch (error) {
    return res.status(400).send(error)
  }
})

router.get('/task', async (req, res) => {
  try {
    const task = await Task.find().lean().exec()
    res.send(task)
  } catch (error) {
    return res.status(400).send(error)
  }
})

router.patch('/task/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    return res.send(task)
  } catch (error) {
    return res.status(400).send(error)
  }
})

router.delete('/task/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id).lean().exec()
    return res.send(task)
  } catch (error) {
    return res.status(400).send(error)
  }
})

module.exports = router
