<<<<<<< HEAD
const IPFS = require("ipfs-api");
//create ipfs object
//using the infura.io node 
const ipfs = new IPFS ({host:'ipfs.infura.io',port:5001,protocol:"https"});
=======
const IPFS = require('ipfs-api');
const ipfs = new IPFS({ 
    host: 'ipfs.infura.io', 
    port: 5001, 
    protocol: 'https' 
});

>>>>>>> third
export default ipfs;