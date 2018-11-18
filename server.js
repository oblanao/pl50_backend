const fs = require('fs');

// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT || 3002;

server.use(middlewares)

server.get('/totalPersons', (req, res) => {
  const db = fs.readFile('./db.json', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    const totalPersons = JSON.parse(data).persons.length;
    res.send({
      totalPersons
    }).end()
  })
})

server.get('/adminlogin', (req, res) => {
  console.log('wht?')
  const username = req.query.username;
  const password = req.query.password;
  if (username.toLowerCase()==='admin'&&password==='qwertyqwerty') {
    res.send({
      correct: true
    })
  } else {
    res.send({
      correct: false
    })
  }
})

server.use(router)


server.listen(PORT, () => {
  console.log('JSON Server is running')
})