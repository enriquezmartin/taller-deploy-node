const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const User = require("../server/user.model")

require('dotenv').config();

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/deploy", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB Atlas:', error);
  });

app.use(express.urlencoded({extended: false}));

app.get("/", async (req, res) => {
    res.send("Hello World!")
})

app.get("/all", async (req, res) => {
    const docs = await User.find({});
    res.json({ data: docs });
});

app.post("/create", async (req, res) => {
    const name = req.body.name;
    const form = new User({name});

    try {
        await form.save();
        res.send("Creating..")
    }
    catch (e) {
        console.log(e);
    }
});

app.delete("/reboot", async(req, res) => {
    await User.deleteMany({})
    res.json({
      "log-from-bunker" : "Espero que hayas hecho una copia de seguridad antes de hacer esto"
    })
});

const port = 8080;
app.listen(port, () => {
    console.log(`listening ${port}`);
})