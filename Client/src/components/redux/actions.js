import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARDS } from "./action-types";
import axios from "axios";


// addFav versión nodemon
// export const addFav = (character) => {
//     return {
//         type: ADD_FAV,
//         payload: character,
//     }
// }


// addFav versión axios
// ACTION | addFav
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        });
    };
};


// removeFav versión nodemon
// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id,
//     }
// }


// removeFav new version
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        });
    };
};


export const filterCards = (gender) => {
    return {
        type: FILTER_CARDS,
        payload: gender
    }
}


export const orderCards = (order) => {
    return {
        type: ORDER_CARDS,
        payload: order,
    }
}
