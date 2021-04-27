const FazerBusca = () => {
	return (
		<div className="container-fluid fazer-busca">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-12 fazer-busca-wrapper">
					<div className="fazer-busca-box">
						<input type="text" placeholder="Buscar no cardápio" />
						<i className="fas fa-search  position-absolute"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FazerBusca };
