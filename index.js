import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const clienteRicardo = new Cliente();
clienteRicardo.nome = 'Ricardo';
clienteRicardo.cpf = 11111222233309;

const clienteAlice = new Cliente();
clienteAlice.nome = 'Alice';
clienteAlice.cpf = 2222111133309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = clienteRicardo;
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = clienteAlice;
contaCorrenteAlice.agencia = 102;

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

console.log(contaCorrenteAlice.cliente);
