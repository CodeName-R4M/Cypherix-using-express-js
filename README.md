# Cypherix-using-express-js
A web application using EJS, Express.js, and EJS layouts for dynamic content rendering.

## Overview
This project is a web application built with Express.js and EJS to showcase dynamic content rendering using EJS layouts. It serves as an example of how to create a simple web application with multiple routes and views.

## Features
- Dynamic content rendering with EJS
- Multiple routes for different pages
- Static file serving for assets

## Tech Stack / Built With
- EJS
- Express.js
- Express EJS layouts

## Installation & Setup
```shell
git clone https://github.com/CodeName-R4M/Cypherix-using-express-js.git
cd Cypherix-using-express-js
npm install
npm run server
```

## Usage
```javascript
// server.js
const express = require("express");
const path = require("path");
const ejsLayout = require("express-ejs-layouts");
const app = express();
const PORT = 11524;

app.use(express.static(path.join(__dirname, "Public")));
app.set("view engine", "ejs");
app.use(ejsLayout);

app.set("layout", "Layout/basic")
app.get("/", (req, res) => {
    res.render("index", { page: 'home' });
})
app.get("/Events", (req, res) => {
    res.render("Events", { page: 'events' })
})
app.get("/Teams", (req, res) => {
    res.render("Teams", { page: 'teams' })
})
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`))
```

## Project Structure
```
- Public/
- node_modules.zip
- package-lock.json
- package.json
- server.js
- views/
```

## Contributing
Contributions are welcome. Feel free to open a pull request or create an issue to discuss potential changes.

## License
This project is licensed under the ISC License.