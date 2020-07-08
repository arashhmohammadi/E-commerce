import CardActionTypes from './card.types';
const INITIAL_STATE = {
    hidden: true,
    cardItems: [],
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CardActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CardActionTypes.ADD_ITEM:
            return {
                ...state,
                cardItems:[...state.cardItems, action.payload]
            }
        default:
            return state;
    }
}
export default cardReducer;