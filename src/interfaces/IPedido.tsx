import { IItensPedido } from "./IItensPedido";

interface IPedidos {
	id: string;
	cliente_id: string;
	endereco_id: string;
	valor: number;
	valorTotal: number;
	metodo_pagamento: string;
	itens_pedido: Array<IItensPedido>;
	created_at: Date;
	updated_at: Date;
}

export type { IPedidos };
