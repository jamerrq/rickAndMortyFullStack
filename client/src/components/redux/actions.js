import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARDS } from "./action-types";
import axios from "axios";


// addFav versión nodemon
// export const addFav = (character) => {
//     return {
//         type: ADD_FAV,
//         payload: character,
//     }
// }


// // addFav versión axios
// // ACTION | addFav
// export const addFav = (character) => {
//     try {
//         const endpoint = 'http://localhost:3001/rickandmorty/fav';
//         return async (dispatch) => {
//             const { data } = await axios.post(endpoint, character);

//             return dispatch({
//                 type: ADD_FAV,
//                 payload: data,
//             });

//         };
//     }
//     catch (error) {
//         return { error: error.message, };
//     };
// };

// DE MELI
export const addFav = (character) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            const { data } = await axios.post(endpoint, character);
            console.log('data', data);
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        };
    }
    // eslint-disable-next-line
    catch (error) {
        return { error: error.message }
    };
};


// removeFav versión nodemon
// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id,
//     }
// }


// // removeFav new version
// export const removeFav = (id) => {
//     try {
//         const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//         return async (dispatch) => {
//             const { data } = await axios.delete(endpoint);

//             return dispatch({
//                 type: REMOVE_FAV,
//                 payload: data,
//             });

//         };
//     } catch (error) {
//         return ({
//             error: error.message,
//         });
//     };
// };


// DE MELI
export const removeFav = (id) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        // console.log(endpoint);
        // console.log('Character ' + id + ' deleted');
        return async (dispatch) => {
            const { data } = await axios.delete(endpoint);
            // console.log('Éxito! ' + Object.keys(data));
            // Object.keys(data).forEach(key => console.log(key, data[key]));
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            });
        };
    }
    catch (error) {
        return { error: error.message };
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
