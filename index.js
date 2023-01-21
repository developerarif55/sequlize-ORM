const express = require("express");
const bookRoutes = require("./routes/book");

const app = express();

// middleware
app.use(express.json());

// define all our routes
app.use("/", bookRoutes);

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
