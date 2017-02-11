const express = require( 'express' );
const { json } = require( 'body-parser' );
const session = require( 'express-session' );

const app = express();
const port = 8080;

app.use(session({ secret: 'jumper', resave: false,  saveUninitialized: false }));

app.use( express.static( __dirname + "/public" ) );
app.use( json() );

app.listen( port, () => {
  console.log(`Express is listening on port ${ port }`);
});