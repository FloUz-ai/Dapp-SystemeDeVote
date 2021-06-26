const path = require("path");

module.exports = {
contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",//local host de mon reseau ganache
      port: 7545,//Port de mon reseau ganache 
      network_id: "5777" //Port de mon reseau ganache
    }
  },

compilers: {//Il faut ajouter obligatoirement la version du compileur utilisé
   solc: {
     version: "0.7.6", // Récupérer la version exacte de solc-bin (par défaut : la  version de truffle)
     settings: {  // Voir les documents de solidity pour des conseils sur l'optimisation et l'evmVersion
       optimizer: {
       enabled: false,
       runs: 200
       },
     }
   },
 },
};