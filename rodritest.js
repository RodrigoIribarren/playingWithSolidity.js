pragma solidity >=0.7.0 <0.9.0;

contract Recepcion {

  mapping(address => uint) balances;

  receive() external payable {
      balances[msg.sender] += msg.value;
      }

    fallback() external payable {

    }

    function recibirSaldo(unit numero) public payable {
      saldoEnviado = msg.value;

      uint monto = numero;

    }
