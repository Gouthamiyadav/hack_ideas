const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Employee = require("./Employee");

const app = express();
const port = 3001;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/hack_ideas")
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("failed");
  });

app.post("/api/employees", async (req, res) => {
  const { employeeId } = req.body;

  try {
    const employee = new Employee({ employeeId });
    await employee.save();
    res.status(201).json({ message: "Employee ID saved successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
