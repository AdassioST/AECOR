const server = require('./networking/Server');
const port = process.env.PORT;
server(port)
    .then(() => console.log(`Listening... Port: ${port}`));
    
   
   
/**
* @property AECOR
* @description AECOR game site router
**/

// (C) AECOR Game
