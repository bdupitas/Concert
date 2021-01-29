const EXPRESS = require('express'); // use express framework
const PATH = require('path'); // NodeJS - Handle and transforms filepaths
const APP = EXPRESS(); // create an express app
const PORT = process.env.PORT || 3000; // Run server on available port, otherwise localhost fallback
const HTTP = require('http'); // NodeJS - Allow transfer of data over HTTP
const SERVER = HTTP.createServer(APP); // create the server to use for socket.io
const ENV = process.env.NODE_ENV; // Set available port

// Create the http server running on the available port
SERVER.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Access heroku production environment or localhost
if (ENV === 'production' || PORT === 3000) {
	// Set code folder
	APP.use(EXPRESS.static(PATH.join(__dirname, '/public')));
} // end if
