import DadosClientes from "../dados/DadosClientes";

export default class ContaCorrente extends DadosClientes {
  constructor(
    clienteId, 
    clienteNome, 
    clienteEmail, 
    clienteCPF, 
    contaPoupanca,
    contaCorrenteId,
    saldo,
    movimentacao
  ) {
    super(clienteId, clienteNome, clienteEmail, clienteCPF, contaPoupanca);
    this.contaCorrenteId = contaCorrenteId;
    this.saldo = saldo;
    this.movimentacao = movimentacao;
  }

  get balance() {
    return this.saldo;
  }

  movimentacoes() {
    let transcacoes = []
    for(let i = 0; i < this.movimentacao.length; i++){
       transcacoes.push(this.movimentacao[i])
    }
    return transcacoes
  }
}