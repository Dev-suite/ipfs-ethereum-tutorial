const Web3 = require('web3');
const contractAbi = require('./contractAbi'); // Replace with your contract ABI
const contractAddress = '0x123abc'; // Replace with your contract address

const web3 = new Web3('YOUR_QUICKNODE_URL');
const contract = new web3.eth.Contract(contractAbi, contractAddress);

async function storeHashOnBlockchain(ipfsHash) {
    const accounts = await web3.eth.getAccounts();
    const senderAddress = accounts[0];

    // Assuming you have a function named "storeHash" in your contract
    await contract.methods.storeHash(ipfsHash).send({ from: senderAddress });
}
