import axios from "axios";

const API_URL = process.env.PROD ? "" : "http://localhost:5000";
const getCardapio = () => {
    axios
        .get(`${API_URL}/pizzas`)
        .then((response) => response.data)
        .catch((err) => {
            console.error(err);
        });
};

export { getCardapio };
