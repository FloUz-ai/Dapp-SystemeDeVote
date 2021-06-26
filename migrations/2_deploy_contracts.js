var systemeVote = artifacts.require("./systemeVote.sol");

module.exports = function(deployer) {
  deployer.deploy(systemeVote);
};
