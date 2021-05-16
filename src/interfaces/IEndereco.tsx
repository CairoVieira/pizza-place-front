interface IEndereco {
	bairro: string;
	cep: string;
	cidade: string;
	cliente_id: string;
	complemento: string;
	created_at: Date;
	estado: string;
	id: string;
	logradouro: string;
	numero: string;
	pais: string;
	updated_at: Date;
	is_principal: boolean;
}

export type { IEndereco };
