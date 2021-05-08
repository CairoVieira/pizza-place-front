interface IIngredientes {
	id: string;
	nome: string;
	valor: number;
	categoria: string;
	created_at: Date;
	updated_at: Date;
}

interface IItensPizza {
	id: string;
	pizza_id: string;
	ingrediente: IIngredientes;
}

interface IPizzas {
	id: string;
	nome: string;
	valor: number;
	valorTotal: number;
	itens_pizza: Array<IItensPizza>;
	imagem: string;
	qtd: number;
	created_at: Date;
	updated_at: Date;
}

export type { IPizzas };
