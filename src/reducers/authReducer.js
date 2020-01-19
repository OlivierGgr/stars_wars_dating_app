export default function (state = {}, action) {
    switch(action.type) {
        case "CREATE_SESSION":
            return { ...state, firstName: action.firstName}
        default:
            return state;
    }
}