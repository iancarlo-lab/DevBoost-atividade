export default class DadosCliente {
    constructor(clienteId, clienteNome, clienteEmail, clienteCPF, contaPoupanca, teste){
            this.clienteID = clienteId,
            this.clienteNome = clienteNome,
            this.clienteEmail = clienteEmail,
            this.clienteCPF = clienteCPF,
            this.contaPoupanca = contaPoupanca
            this.teste = teste
        }
        testando(){
            console.log("Dentro da classe Dados cliente")
        }

        get poupanca(){
            return this.contaPoupanca
        } 

        dadosCliente(){
            const dadosCliente = {
                id: this.clienteID,
                nome: this.clienteNome,
                email: this.clienteEmail,
                cpf: this.clienteCPF
            }

            return dadosCliente
        }
}