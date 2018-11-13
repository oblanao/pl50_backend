let codes = {
  'PATRICK50AVAILABLE': {
    status: 'available',
    personId: null,
    extraPersonId: null,
  },
  'PATRICK50USED2': {
    status: 'used',
    personId: 0,
    extraPersonId: 1
  },
  'PATRICK50USED': {
    status: 'used',
    personId: 2,
    extraPersonId: null
  }
}

let persons = [
  {
    firstName: 'Patrick',
    lastName: 'Leclair',
    company: 'Fast Solutions',
    position: 'CEO',
    location: 'Antwerp',
  },
  {
    firstName: 'Mimi',
    lastName: 'Sunca',
    company: 'Pupu Mumu',
    position: 'CFO',
    location: 'Bruxelles',
  },
  {
    firstName: 'Haules',
    lastName: 'Baules',
    company: 'Haha Production',
    position: 'Janitor',
    location: 'Vaslui',
  }
]

module.exports = {
  codes,
  persons
}