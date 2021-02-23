const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "redux2";
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

require("./config/mongoose")(db_name);
require("./routes/User.routes")(app);
require("./routes/Product.routes")(app);

app.listen(port, ()=> console.log(`Listening on port ${port}`))