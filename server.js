const express = require('express');

const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000

app.use(express.json());

app.get('/', (req, res, next)=>{
	res.send('Hello world')
})

app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));

app.listen(port, ()=>{
	console.log(`Server running on port ${port}`);
})

module.exports = app;