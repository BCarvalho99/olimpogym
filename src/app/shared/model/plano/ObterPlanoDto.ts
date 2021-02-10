export interface Value{
    value: ObterPlanoDto
}

export interface ObterPlanoDto{
    id: number;
    nome: string;
    valor: number;
    descricao: string;
    dataCriacao: Date;
}