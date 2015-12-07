const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 3000;

app.use(serveStatic(path.join(__dirname, 'public')));
app.listen(port, () =>{
  console.log("Server running on port: ", port);
});
