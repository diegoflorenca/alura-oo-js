import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11111222233309;
cliente1.agencia = 1001;
cliente1._saldo = 0;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 2222111133309;
cliente2.agencia = 1001;
cliente2._saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);
