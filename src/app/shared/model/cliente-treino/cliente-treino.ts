export interface ClienteTreino {
    id: number;
    treino: Treino;
  }
  
export interface Treino {
    id: number;
    descricao: string;
    nome: string;
    funcionario: Funcionario;
 }

 interface Funcionario {
  id: number;
  nome: string;
  nivel: number;
  cpf: string;
  email: string;
  foto: string;
}