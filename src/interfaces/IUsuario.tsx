import { IEndereco } from "./IEndereco";

interface IUsuario {
	cpf: string;
	created_at: Date;
	id: string;
	nome: string;
	updated_at: Date;
	endereco: IEndereco;
	listaEndereco: IEndereco[];
}

export type { IUsuario };
