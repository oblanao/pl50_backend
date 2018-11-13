const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// app.get('/code', (req, res) => {
//   const code = codes[req.query.code];
//   if (!code) {
//     res.send({ message: 'Code unavailable' }).status(404);
//   } else {
//     const lastName = req.query.lastName;
//     const isUsed = code.status === 'used';
//     if (isUsed) {
//       let person = persons[code.personId];
//       if (person.lastName === lastName) {
//         let result = [];
//         result.push(person);
//         if (code.extraPersonId) {
//           let extraPerson = persons[code.extraPersonId];
//           result.push(extraPerson);
//         }
//         res.send(result).status(200)
//       } else {
//         res.send({ message: "Last name doesn't match" }).status(404);
//       }
//     } else {
//       res.send({ message: "Code exists and is not used" }).status(200);
//     }
//   }
// })

// app.get('/register', (req, res) => {
//   const code = codes[req.query.code];
//   if (!code) {
//     res.send({ message: 'Code unavailable' }).status(404);
//   } else {
//     const { personType, lastName, firstName, company, position, location } = req.query;
//     let newPerson = {
//       lastName,
//       firstName,
//       company,
//       position,
//       location
//     }
//     if (personType === 'main') {
//       persons[code.personId] = { ...newPerson };
//       res.send({ message: 'Main person updated' }).status(200);
//     } else {
//       if (code[extraPersonId] !== null) {
//         persons[code.extraPersonId] = newPerson;
//         res.send({ message: 'Extra person updated' }).status(200);
//       } else {
//         persons.push(newPerson);
//         code[extraPersonId] = persons.length - 1;
//         res.send({ message: 'Extra person created' }).status(200);
//       }
//     }
//   }
// })

// app.get('/persons', (req, res) => {
//   res.send(persons);
// })

// app.listen(port, () => {
//   console.log(`Server is listening on ${port}`);
// })