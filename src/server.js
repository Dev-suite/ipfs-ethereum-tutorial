const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        const ipfsHash = await uploadFileToIPFS(file);
        await storeHashOnBlockchain(ipfsHash);
        res.status(200).send('File uploaded successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while uploading the file.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
