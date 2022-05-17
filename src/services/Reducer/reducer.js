import { ADD_TO_CART } from "../constant";

const initialState = {
    cardData: []
}
export default function cardItems(state = initialState, action) {

    switch (actions.type) {
         
        case ADD_TO_CART : 
            return {
                ...state,
                cardData: action.data
            }
            break;

        
        default:
            return state

    }
}
