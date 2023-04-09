const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const farmController = require("./controllers/farmController");
const TankController = require("./controllers/tankController");
const FishController = require("./controllers/fishController");
const TaskController = require("./controllers/taskController");
const userController = require("./controllers/userController");
mongoose.connect(
  'mongodb+srv://sv01:sahas1234@cluster0.hl4owzp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
)
  .then(() => console.log("Database connected!"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

TankController(app);
FishController(app);
TaskController(app);
farmController(app);
userController(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


console.log(`Server is running on port ${process.env.PORT || 3000}`);
