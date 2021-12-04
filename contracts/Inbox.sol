pragma solidity ^0.4.17;

contract Inbox {
    string private _message;

    function Inbox(string initialMessage) public {
        _message = initialMessage;
    }

    function setMessage(string newMessage) public {
        _message = newMessage;
    }

    function getMessage() public view returns(string) {
        return _message;
    }

    function doMath(int a, int b) {
        a + b;  // 3 gas
        b - a;  // 3 gas
        a * b;  // 5 gas
        a == 0; // 3 gas
    }
}