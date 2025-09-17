const express = require("express");
const mongoose = require("mongoose");

const studentRoute = require("./studentRoute");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://harvaniharsha_db_user:harsha123@my-server.wjmnwlf.mongodb.net/?retryWrites=true&w=majority&appName=My-server",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/song", studentRoute);

app.listen(PORT, () => {
  console.log("server is running : http://localhost:" + PORT);
});