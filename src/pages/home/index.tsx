import React, { useEffect } from "react";
import { Menu } from "../../components/menu";
import { Rodape } from "../../components/rodape";
import "../../css/home.css";
import { Cardapio } from "./cardapio";
import { PassoPasso } from "./passo-passo";
import { Pizza } from "./pizza";
import { QuemSomos } from "./quem-somos";
import * as action from "./actions";

// const DEFAULT_STATE = {
//     listaPizzas: Array,
// };
const Home = () => {
    // const [];
    useEffect(() => {
        action.getCardapio();
    }, []);

    return (
        <>
            <Menu />
            <Pizza />
            <QuemSomos />
            <PassoPasso />
            <Cardapio />
            <Rodape />
        </>
    );
};

export { Home };
