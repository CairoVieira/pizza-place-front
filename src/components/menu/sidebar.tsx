import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../images/PizzaPlaceLogo.png";

const SideBar = (props: any) => {
	return (
		<div className="side-bar">
			<div className="side-bar-logo">
				<img src={imgLogo} />
			</div>
			<div className="side-bar-btn-collapsed display">
				<button>
					<span>
						<i className="fas fa-align-justify"></i>
					</span>
				</button>
			</div>

			<ul className="side-bar-expanded">
				<li className="side-bar-top">
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="#services">Minhas Pizzas</Link>
				</li>
				<li>
					<Link to="#clients">Meus Pedidos</Link>
				</li>
				<li>
					<Link to="#contact">Favoritos</Link>
				</li>
				<li>
					<Link to="#contact">Endereços</Link>
				</li>
				<li>
					<Link to="#contact">Trocar Senha</Link>
				</li>
				<li className="side-bar-bottom">
					<Link
						to="/"
						onClick={() => {
							sessionStorage.removeItem("user");
						}}
					>
						Sair
					</Link>
				</li>
			</ul>
			<ul className="side-bar-collapsed display">
				<li>
					<Link to="/">
						<i className="fas fa-home"></i>
					</Link>
				</li>
				<li>
					<Link to="#services">
						<i className="fas fa-pizza-slice"></i>
					</Link>
				</li>
				<li>
					<Link to="#clients">
						<i className="fas fa-list-alt"></i>
					</Link>
				</li>
				<li>
					<Link to="#contact">
						<i className="fas fa-heart"></i>
					</Link>
				</li>
				<li>
					<Link to="#contact">
						<i className="fas fa-user"></i>
					</Link>
				</li>
				<li>
					<Link to="#contact">
						<i className="fas fa-cog"></i>
					</Link>
				</li>
				<li className="side-bar-collapsed-bottom">
					<Link
						to="/"
						onClick={() => {
							sessionStorage.removeItem("user");
						}}
					>
						<i className="fas fa-sign-out-alt"></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export { SideBar };
