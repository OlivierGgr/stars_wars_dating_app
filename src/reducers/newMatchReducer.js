export default function (state = {}, action) {
    switch(action.type) {
        case "ADD_MATCH":
            return { ...state, 
                matches: action.newMatch
            }
        default:
            return state;
    }
}