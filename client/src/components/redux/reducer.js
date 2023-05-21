import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-types";


const initialState = {
    myFavorites: [],
    allCharacters: [],
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        // REDUCER | ADD_FAV
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };

        // REDUCER | REMOVE_FAV
        case REMOVE_FAV:

            return {
                ...state,
                myFavorites: action.payload
            };

        case FILTER_CARDS:

            let genderFilter = [...state.allCharacters];
            if (action.payload !== 'all') genderFilter = genderFilter.filter(
                ch => ch.gender === action.payload);

            return {
                ...state,
                myFavorites: genderFilter,
            };

        case ORDER_CARDS:

            let orderFilter = state.allCharacters.sort((a, b) => {
                if (action.payload === 'asc') {
                    return a.id - b.id;
                }
                return b.id - a.id;
            });

            return {
                ...state,
                myFavorites: orderFilter,
            };

        default:
            return {
                ...state,
            };
    };

};


export default rootReducer;
