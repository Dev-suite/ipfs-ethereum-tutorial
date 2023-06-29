# IPFS and Ethereum Tutorial

This tutorial provides a step-by-step guide on storing files on IPFS and linking them to the Ethereum blockchain. By combining the decentralized storage capabilities of IPFS with the immutability and transparency of Ethereum, we can create a robust and secure file storage solution.

## Prerequisites

Before getting started, make sure you have the following:

- Node.js and npm installed on your machine.
- A QuickNode Ethereum node URL. Sign up at [QuickNode](https://www.quicknode.com/) to obtain your URL.

## Getting Started

1. Clone this repository to your local machine.

git clone https://github.com/Dev-suite/ipfs-ethereum-tutorial.git


2. Navigate to the project folder.

cd ipfs-ethereum-tutorial


3. Install the dependencies.

npm install


4. Open the `blockchainInteraction.js` file and replace `YOUR_QUICKNODE_URL` with your QuickNode Ethereum node URL.

5. Deploy the smart contract.

node blockchainInteraction.js deploy


6. Take note of the deployed contract address and ABI.

7. Open the `src/ipfsUpload.js` file and replace `YOUR_SELECTED_IPFS_HASH` with the IPFS hash of the file you want to store.

8. Open the `src/frontend.js` file and replace `YOUR_CONTRACT_ABI` with the contract ABI obtained from step 6, and replace `0x123abc` with the deployed contract address.

## Running the Application

1. Start the server.

npm start


2. Open your web browser and go to `http://localhost:3000`. You should see the application running.

3. Upload a file to IPFS using the form.

4. Verify that the file hash is stored on the Ethereum blockchain.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
