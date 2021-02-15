// REQUIRED PACKAGES, FILES AND CONST VARS
const PATH = require('path'); // NodeJS - Handle and transforms filepaths
const HTTP = require('http'); // NodeJS - Allow transfer of data over HTTP
const EXPRESS = require('express'); // use express framework
const APP = EXPRESS(); // create an express app
const SERVER = HTTP.createServer(APP); // create the server to use for socket.io
const PORT =  process.env.PORT ||3000; // Run server on available port, otherwise localhost fallback
const ENV = process.env.NODE_ENV; // Set available port


// Create the http server running on the available port
SERVER.listen(PORT);

// Access heroku production environment or localhost
if (ENV === 'production' || PORT === 3000) {
    // Set code folder
    APP.use(EXPRESS.static(PATH.join(__dirname, '../../public')));
    console.log(`Server running on port:  ${PORT}`);
} // end if

