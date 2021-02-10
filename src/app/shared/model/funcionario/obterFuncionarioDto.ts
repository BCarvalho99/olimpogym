export interface ObterFuncionarioDto {
  value: Value;
}

export interface Value {
  id:number;
  foto: string;
  pessoa:Pessoa;
}

interface Pessoa{
  id:number;
  nome: string;
  nivel: number;
  cpf: string;
  email: string;
}