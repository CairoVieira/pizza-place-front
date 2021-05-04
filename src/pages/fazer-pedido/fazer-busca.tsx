import { IBebidas } from "../../interfaces/IBebidas";
import { IPizzas } from "../../interfaces/IPizzas";

const FazerBusca = (props: any) => {
	const { listaPizzas, listaBebidasGrupo } = props.store.pizzaria;
	const handleChange = (e: any) => {
		const { value } = e.target;
		let novaListaPizzas: IPizzas[] = [];
		let novaListaBebidas: Array<IBebidas[]> = [];

		if (e.key === "Enter") {
			if (value.trim() === "") {
				novaListaPizzas = listaPizzas;
				novaListaBebidas = listaBebidasGrupo;
			} else {
				listaPizzas.forEach((pizza: IPizzas) => {
					pizza.itens_pizza.forEach((item) => {
						if (item.ingrediente.nome.includes(value))
							novaListaPizzas.push(pizza);
					});
				});
				listaBebidasGrupo.forEach((grupo: IBebidas[]) => {
					grupo.forEach((bebida) => {
						if (bebida.nome.includes(value))
							novaListaBebidas.push(grupo);
					});
				});
			}
			props.handleFiltrarPedido(novaListaPizzas, novaListaBebidas);
		}
	};

	return (
		<div className="container-fluid fazer-busca">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-12 fazer-busca-wrapper">
					<div className="fazer-busca-box">
						<input
							type="text"
							placeholder="Buscar no cardápio"
							onKeyPress={handleChange}
						/>
						<i className="fas fa-search  position-absolute"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FazerBusca };
