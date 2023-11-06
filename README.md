---

# Dblgcol contract
Dblgcol is an NFT collection that implements the ERC721 interface.

# Description
The Dblgcol application can mint new NFTs on the Sepolia test network.
In this project, we use Hardhat to interact with the smart contract, compile it, deploy it, and then verify it using the Etherscan API.
The frontend was developed in React.js and ethers.js to help interact with the blockchain, call functions of the deployed contract, and interact with them.
In the future, the functionality of this application will be updated by adding a storage page that will contain all NFTs that users have deployed.

# How to Install and Run the Project
You need to download all dependencies using:
```zsh
npm install
```
After that, create a .env file and paste the following lines:
1. NETWORK=(which network you want to use).
2. INFURA_URL="https://sepolia.infura.io/v3/(YOUR-API-KEY)".
3. PRIVATE_KEY=(PRIVATE KEY OF YOUR METAMASK ACCOUNT).
4. ETHERSCAN_API=(API that you can get from etherscan.io).
5. OWNER="0x74a6844616B775b10e55ba19Be1c088c8CDB1ce6".

Then compile the contract: 
```zsh
make compile
```
Deploy to the network:
```zsh
make deploy
```
Verify the contract:
```zsh
make address=*value* verify
```

Run the server (localhost):
```zsh
make run
```

Testing:
```zsh
make ctest
```

--- 