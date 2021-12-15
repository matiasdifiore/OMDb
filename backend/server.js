const dotenv = require('dotenv');
const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const volleyball = require("volleyball");
const app = express();
const router = require("./routes");
const db = require("./config/db");
const { User } = require("./models");

dotenv.config();
//LOGGING MIDDLEWARE
app.use(volleyball);

// PARSING MIDDLEWARE
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false); //email not found
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); //wrong password
            }
            return done(null, user); //success
          });
        })
        .catch((error) => {
          done(error);
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});


app.use(
  sessions({
    secret: "omdb",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600 * 24 * 60 * 60,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

db.sync({ force: false })
  .then(function () {
    app.listen(8080, () =>
      console.log("Servidor escuchando en el puerto 8080")
    );
  })
  .catch((err) => {
    console.log("Failed", err);
  });

// //STATIC  sirve para ver si el pedido es de un archivo o no, en este caso el build nuestro que es el front, es para servir archivos. Osea si el req es de un arvhico pasa por aca directamente y manda el archivo pedido, ej algo del front, para mandar un arvhico html, o un css o una imagen cuando la pagina la pide. CHEQUEAR COMO PEDIR EN EL FRONT DESPUES
// app.use(express.static("build"));
