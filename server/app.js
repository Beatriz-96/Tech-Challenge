const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const phoneData = require("./phones.json");

app.use(cors());
app.use(express.static("public"));

app.get("/phones", (req, res) => {
  res.json(phoneData);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phoneData.find((p) => p.id === id);

  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: "Phone not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
