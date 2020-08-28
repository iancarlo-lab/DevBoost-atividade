let Clientes = require('./clientes/Clientes')
import DadosClientes from "./conta/ContaCorrente"

let dados = Clientes.clientes
console.log('Dados iniciais: ', dados)

const mostrarClientes = dados.map(({
    clienteID,
    clienteNome,
    clienteEmail,
    clienteCPF,
    contaPoupanca,
    contaCorrente: { id, saldo, movimentacao },
  }) => {
    const contaCliente = new DadosClientes(
      clienteID,
      clienteNome,
      clienteEmail,
      clienteCPF,
      contaPoupanca,
      id,
      saldo,
      movimentacao
    );

    const extrato = {
      dados_cliente: contaCliente.dadosCliente(),
      saldo_poupança: contaCliente.poupanca,
      saldo_conta_corrente: contaCliente.saldo,
      transacoes: contaCliente.movimentacoes(),
    };

    return extrato;
  }
);

console.log("Dados organizados: ", mostrarClientes);