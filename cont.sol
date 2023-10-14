pragma solidity >0.5.0;
// SPDX-License-Identifier: GPL-3.0

/**
* @title Transfer
* @dev Store & retrieve value in a variable
*/

import "hardhat/console.sol";

contract Transfer {

    struct User {
        string name;
        uint status;
    }

    struct Transfer {
        address owner;
        address target;
        uint value;
        uint status;
        bytes32 secret_code;
        uint number;
    }

    mapping (address => User) public user_mapping;
    address[] public users;
    Transfer[] public transfers;

    constructor() {
        // Admins
        user_mapping[msg.sender] = (User("Maxim", 1));
        users.push(msg.sender);
    }

    function registration(string memory name, address user_address) public {
        require(user_mapping[msg.sender].status == 1, "u not admin");
        user_mapping[user_address] = (User(name, 0));
        users.push(user_address);
    }

    function getAllUsers() public returns (address[] memory) {
        return users;
    }

    function getAllTransfers() public returns (Transfer[] memory) {
        return transfers;
    }

    function add_transfer(uint value, address target, bytes32 code) public payable {
        // require(msg.value == value, "uncorrect value");
        require(target != msg.sender, "u can pay to urself");

        uint flag = 0;

        for (uint index = 0; index < users.length; index++) {
            if (users[index] == target) {
                flag += 1;
            }

            if (users[index] == msg.sender) {
                flag += 1;
            }
        }

        require(flag == 2, "someone user not registered");

        transfers.push(Transfer(msg.sender, target, msg.value, 0, code, transfers.length));
    }

    function cancel_transfer(uint id) public {
        require(transfers[id].owner == msg.sender, "u dont owner of transfer");
        require(transfers[id].status == 0, "ur transfer already done");

        payable(msg.sender).transfer(transfers[id].value);

        transfers[id].status = 2;
    }

    function accept_transfer(bytes32 code, uint id) public {
        require(transfers[id].target == msg.sender, "u cant");
        require(transfers[id].status == 0, "transfer alrd accepted or transfer canceled");

        if (code == transfers[id].secret_code) {
            payable(msg.sender).transfer(transfers[id].value);
            transfers[id].status = 1;
        } else {
            payable(transfers[id].owner).transfer(transfers[id].value);
            transfers[id].status = 3;
        }
    }

    function up_to_admin(uint user_id) public {
        require(user_mapping[msg.sender].status == 1, "u not admin");
        user_mapping[users[user_id]].status = 1;
    }
}
