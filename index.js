import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const clienteRicardo = new Cliente('Ricardo', 11111222233309);
const contaCorrenteRicardo = new ContaCorrente(1001, clienteRicardo);
contaCorrenteRicardo.depositar(500);

const clienteAlice = new Cliente('Alice', 2222111133309);
const contaCorrenteAlice = new ContaCorrente(102, clienteAlice);

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

console.log(ContaCorrente.numeroDeContas);
