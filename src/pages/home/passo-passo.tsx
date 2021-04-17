const PassoPasso = () => {
    return (
        <div className="container-fluid">
            <div className="row passo-passo-background" />
            <div className="row passo-passo">
                <div className="col-sm-12 col-md-6 col-lg-3 passo-passo-numero n1">
                    <h1>1</h1>
                    <label>Massa</label>
                    <div>
                        <span> Massa de fermentação Natural</span>
                    </div>
                    <p>+</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 passo-passo-numero n2">
                    <h1>2</h1>
                    <label>Molho</label>
                    <div>
                        <span> Molho com produtos orgânicos</span>
                    </div>
                    <p>+</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 passo-passo-numero n3">
                    <h1>3</h1>
                    <label>Toppings</label>
                    <div>
                        <span> Toppings frescos e de qualidade</span>
                    </div>
                    <p>=</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 passo-passo-numero n4">
                    <h1>4</h1>
                    <label>A Melhor</label>
                    <div>
                        <span> A melhor pizza da cidade</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PassoPasso };
