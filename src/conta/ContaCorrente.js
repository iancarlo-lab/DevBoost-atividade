import DadosClientes from "../dados/DadosClientes";

export default class ContaCorrente extends DadosClientes {
  constructor(
    clienteId, 
    clienteNome, 
    clienteEmail, 
    clienteCPF, 
    contaPoupanca,
    ContaCorrenteId,
    saldo,
    movimentacao
  ) {
    super(clienteId, clienteNome, clienteEmail, clienteCPF, contaPoupanca);
    this.ContaCorrenteId = ContaCorrenteId;
    this.saldo = saldo;
    this.movimentacao = movimentacao;
  }

  get balance() {
    return this.saldo;
  }

  movimentacoes() {
    const movimentosCliente = this.movimentacao.map(({ operacao, custo }) => {
        const transacoes = {operacao,custo};
        return transacoes;
      }
    );
    return movimentosCliente;
  }
}