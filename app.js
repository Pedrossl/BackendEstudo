import express from 'express'
import dbKnex from './database/db_config.js'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async (req, res) => {
  const { nome } = req.body

  try {
    await dbKnex('usuarios').insert({ nome })
    res.status(200).json({ message: `User ${nome} inserted successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Error inserting user', error });
  }
})

app.get('/users', async (req, res) => {
  try {
    const users = await dbKnex('usuarios').select('*')
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})