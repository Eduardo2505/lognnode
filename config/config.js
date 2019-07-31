// Configure the app settings here such as Web port, certificates, etc.



// read from the file system (used for SSL certs)
var fs = require('fs');



module.exports = {
  port: 80
};

// module.exports = {
//   port: 80,
//   key  : fs.readFileSync('home/appliance/keys/interside.keystore'),
//   cert : fs.readFileSync('home/appliance/keys/d92bcc176810f054.crt'),
//   ca: [fs.readFileSync('home/appliance/keys/gdig2.crt')]
// };

