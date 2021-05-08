import { IBebidas } from "./IBebidas";
import { IPizzas } from "./IPizzas";

interface IItensPedido {
	id: string;
	pizza_id: string;
	bebida_id: string;
	favorito_id: string;
	valor: number;
	pedido_id: string;
	valor_item_pedido: number;
	created_at: Date;
	updated_at: Date;
	pizza: IPizzas;
	bebida: IBebidas;
	// favorito: IFavorito;
}

export type { IItensPedido };
