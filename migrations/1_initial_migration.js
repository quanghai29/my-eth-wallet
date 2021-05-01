const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);

  const tokenMock = await DaiTokenMock.deployed();

  // Mint 1,000 Dai Tokens for deployer
  await tokenMock.mint(
    '0xf8cbFD7689f890Ba6df35B34C8D860c34E941019',
    '10000000000000000000000'
  )
};