const express = require("express");
const app = express();
app.use(express.json());

let personLists = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/info", (req, res) => {
  res.send(
    ` <div>  <p>Phonebook has info for ${
      personLists.length
    } people</p> <p>${new Date()}</p>   </div>`
  );
});

app.get("/api/persons", (req, res) => {
  res.json(personLists);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = personLists.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = personLists.filter((person) => person.id === id);
  res.status(204).end();
});

const generateId = () => {
  return Math.floor(Math.random() * (1000 - 10) + 10);
};

app.post("/api/persons", (req, res) => {
  const person = req.body;

  if (!person) {
    return res.status(400).json({
      error: "content missing",
    });
  }

  if (!person.name) {
    return res.status(400).json({
      error: "Name is missing",
    });
  }

  if (personLists.map((person) => person.name).includes(person.name)) {
    return res.status(400).json({
      error: "Name is already in the phonebook",
    });
  }

  if (!person.number) {
    return res.status(400).json({
      error: "Number is missing",
    });
  }

  if (personLists.map((person) => person.number).includes(person.number)) {
    return res.status(400).json({
      error: "Number is already in the phonebook",
    });
  }

  const personData = {
    id: generateId(),
    name: person.name,
    number: person.number,
  };

  personLists = personLists.concat(personData);

  res.json(personLists);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
