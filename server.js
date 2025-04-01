const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON

const users = [
  { id: 1, name: "void" },
  { id: 2, name: "umesha" },
];

// GET all userss
app.get("/users", (req, res) => {
  res.json(users);

   
});

// POST a new user
app.post("/users", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

// PUT update user
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("User not found");

  users.splice(index, 1);
  res.send("User deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));
 