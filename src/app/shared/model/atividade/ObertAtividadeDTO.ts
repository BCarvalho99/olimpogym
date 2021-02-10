export interface ObterAtividadeDTO {
    id: number;
    nome: string;
    descricao: string;
    dataInicio: string;
    dataTermino: string;
    aparelhoId: number;
    funcionarioId: number;
    aparelho: Aparelho;
  }
  interface Aparelho {
    id: number;
    descricao: string;
    nome: string;
    funcionarioId: number;
    data: string;
    statusAparelho: number;
  }
  
