interface IBebidas {
	id: string;
	nome: string;
	valor: number;
	valorTotal: number;
	qtd: number;
	categoria: string;
	created_at: Date;
	updated_at: Date;
	imagem: string;
}

export type { IBebidas };
