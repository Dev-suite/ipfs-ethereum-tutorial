const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

async function uploadFileToIPFS(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = async () => {
            const buffer = Buffer.from(reader.result);
            try {
                const response = await ipfs.add(buffer);
                const ipfsHash = response[0].hash;
                resolve(ipfsHash);
            } catch (error) {
                reject(error);
            }
        };
        reader.readAsArrayBuffer(file.data);
    });
}
