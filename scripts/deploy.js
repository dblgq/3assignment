const hre = require("hardhat");

async function main() {
  const Dblgcol = await hre.ethers.getContractFactory("Dblgcol")
  const dblgcol = await Dblgcol.deploy("0x74a6844616B775b10e55ba19Be1c088c8CDB1ce6");

  await dblgcol.waitForDeployment()
  console.log("Dblgcol: ", await dblgcol.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
