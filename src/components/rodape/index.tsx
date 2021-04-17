import "../../css/rodape.css";
import logo from "../../images/PizzaPlaceLogo.png";

const Rodape = () => {
    return (
        <div id ="contato" className="container-fluid">
            <div className="row rodape-top"></div>
            <div className="row rodape-bottom">
                <div className="col-sm-12 col-md-6 col-lg-6 rodape-bottom-both">
                    <div className="rodape-bottom-logo">
                        <img
                            alt="logo pizza place"
                            src={logo}
                            className="rodape-bottom-logo-img"
                        />
                    </div>
                    <div className="rodape-bottom-endereco">
                        <div className="row">
                            <div className="col-12">
                                <label>Rua Taufic Salloum, 2255</label>
                            </div>
                            <div className="col-12">
                                <label>Jardim Veneza - Franca - SP</label>
                            </div>
                            <div className="col-12">
                                <label>(11) 96939-1598</label>
                            </div>
                            <div className="col-12 rodape-bottom-redes">
                                <div className="redes-sociais">
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                                <div className="redes-sociais">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 rodape-mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d933.9794091659439!2d-47.400179883675044!3d-20.55055058711043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a88324d6e3ad%3A0x759b2a0cfd14db79!2zMjDCsDMzJzAxLjAiUyA0N8KwMjQnMDIuOSJX!5e0!3m2!1spt-BR!2sbr!4v1618268198862!5m2!1spt-BR!2sbr"
                        width="50%"
                        height="250"
                        loading="lazy"
                        title="endereço"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export { Rodape };
