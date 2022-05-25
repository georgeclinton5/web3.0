// // SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transaction {
    uint transactionCount;

    event Transfer(address from, address receiver, uint amount, uint256 timestamp);

    struct TransactionStruct {
        address sender;
        address receiver;
        uint amount;
        uint256 timestamp;
    }

    TransactionStruct[] TransactionArray;

    function AddToBlockchain(address payable receiver, uint amount) public {
        transactionCount += 1;
        TransactionArray.push(TransactionStruct(msg.sender, receiver, amount, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, block.timestamp);
    }

    function getTransaction() public view returns(TransactionStruct[] memory) {
        return TransactionArray;
    }

    function getTransactionCount() public view returns(uint) {
        return transactionCount;
    }
}
