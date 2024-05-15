require("dotenv").config();

//external module
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//internal module
const sequelize = require("./db/conn");
const authRoute = require("./routes/auth");
const app = express();
app.use(express.json());
app.use(cookieParser());

// secure connection with angular
const corsOptions = {
  origin: "http://localhost:4200", // Allow only this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies to be sent with requests
  optionsSuccessStatus: 204, 
};

app.use(cors(corsOptions));

// Session store
const sessionStore = new SequelizeStore({
  db: sequelize,
});

//for session mangement
app.use(
  session({
    secret: process.env.SECRET_KEY, // Replace with a secure key
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    },
  })
);

// Sync session store
sessionStore.sync();

app.use("/api/auth", authRoute);

//  server start here
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
