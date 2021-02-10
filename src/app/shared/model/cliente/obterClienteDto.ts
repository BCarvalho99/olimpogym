export interface ObterClienteDto {
    value: Value;
}
  
export interface Value {
    id: number;
    ativo: boolean;
    telefone: string;
    plano: Plano;
    pessoa:Pessoa;
}

interface Plano {
    id: number;
    nome: string;
    valor: number;
    descricao: string;
}

interface Pessoa{
    id: number;
    nome: string;
    email: string;
    cpf: string;
}