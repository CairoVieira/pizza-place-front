import { Link } from "react-router-dom";
import "../../css/menu.css";
import logo from "../../images/PizzaPlaceLogo.png";

const Menu = (props: any) => {
	console.log("PROPS==", props);
	const { usuario } = props.store;
	return (
		<nav className="navbar navbar-expand-lg navbar-expand-sm bg-menu">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#quem-somos">
							Quem Somos
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#cardapio">
							Cardápio
						</a>
					</li>
					<li className="nav-item">
						<img
							alt="logo pizza place"
							src={logo}
							className="logo-img"
						/>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/fazer-pedido">
							Fazer Pedido
						</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contato">
							Contato
						</a>
					</li>
					{!usuario.usuario.nome && (
						<li className="nav-item ">
							<Link className="nav-link btn-login" to="/login">
								Login
							</Link>
						</li>
					)}
					{usuario.usuario.nome && (
						<li className="nav-item ">
							<button className="nav-link btn-login">
								{usuario.usuario.nome.split(" ")[0]}
							</button>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export { Menu };
