import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/login.css";

const FormularioLogin = (props: any) => {
	const [emailLogin, setEmailLogin] = useState("");
	const [senhaLogin, setSenhaLogin] = useState("");

	const handleChange = (e: any) => {
		switch (e.target.name) {
			case "emailLogin":
				setEmailLogin(e.target.value);
				break;
			case "senhaLogin":
				setSenhaLogin(e.target.value);
				break;
			default:
				break;
		}
	};

	const handleLogin = (e: any) => {
		e.preventDefault();
		props.login(emailLogin, senhaLogin);
	};

	return (
		<div>
			<div className="body">
				<div className="container-login" id="container-login">
					<div className="row">
						<div className="form-container sign-up-container">
							<form
								className="form-login"
								// onSubmit={(e) => this.handleInscreva(e)}
							>
								<h1 className="h1-login">Crie sua conta</h1>
								<input
									type="text"
									// value={emailLogin}
									// onChange={handleChange}
									name="emailLogin"
									required
									className="input-login mt-4"
									placeholder="Nome"
									autoComplete="off"
								/>
								<input
									type="email"
									// value={this.state.newEmail}
									// onChange={this.handleChange}
									id="newEmail"
									className="input-login"
									placeholder="E-mail"
									required
									autoComplete="off"
								/>
								<input
									type="password"
									// value={this.state.newSenha}
									// onChange={this.handleChange}
									id="newSenha"
									className="input-login"
									placeholder="Senha"
									required
									autoComplete="off"
								/>
								<button
									type="submit"
									className="button-login mt-2"
								>
									Inscreva-se
								</button>
							</form>
						</div>
						<div className="form-container sign-in-container">
							<form className="form-login" onSubmit={handleLogin}>
								<h1 className="h1-login">Login</h1>
								<input
									type="email"
									name="emailLogin"
									value={emailLogin}
									onChange={handleChange}
									className="input-login mt-4"
									required
									placeholder="E-mail"
									autoComplete="off"
									maxLength={30}
								/>
								<input
									type="password"
									name="senhaLogin"
									value={senhaLogin}
									onChange={handleChange}
									className="input-login"
									required
									placeholder="Senha"
									autoComplete="off"
									maxLength={12}
								/>
								<button className="button-login" type="submit">
									Login
								</button>
								<Link className="a-login" to="/esqueci-senha">
									Esqueci minha senha
								</Link>
							</form>
						</div>
						<div className="overlay-container">
							<div className="overlay">
								<div className="overlay-panel overlay-left">
									<h1 className="h1-login">
										Bem vindo de volta!
									</h1>
									<p className="p-login">
										{" "}
										FAÇA LOGIN PARA FAZER PEDIDOS E COMER A
										MELHOR PIZZA DA CIDADE!
									</p>
									<button
										className="button-login ghost"
										id="signIn"
									>
										Login
									</button>
								</div>
								<div className="overlay-panel overlay-right">
									<h1 className="h1-login">SEJA BEM VINDO</h1>
									<p className="p-login">
										REGISTRE-SE PARA FAZER PEDIDOS E COMER A
										MELHOR PIZZA DA CIDADE!
									</p>
									<button
										className="button-login ghost"
										id="signUp"
									>
										REGISTRAR
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FormularioLogin };
