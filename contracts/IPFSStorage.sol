// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IPFSStorage {
    mapping(uint256 => string) private ipfsHashes;

    event HashStored(uint256 indexed id, string ipfsHash);

    function storeHash(uint256 id, string memory ipfsHash) public {
        ipfsHashes[id] = ipfsHash;
        emit HashStored(id, ipfsHash);
    }

    function getHash(uint256 id) public view returns (string memory) {
        return ipfsHashes[id];
    }
}
