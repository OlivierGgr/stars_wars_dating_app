export default function (state = {}, action) {
    switch(action.type) {
        case "CREATE_SESSION":
            return { ...state, 
                firstName: action.firstName,
                lastName: action.lastName,
                age: action.age,
                gender: action.gender,
                lookingFor: action.lookingFor,
                homeworld: action.homeworld,
                jedi: action.jedi,
                affiliation: action.affiliation
            }
        default:
            return state;
    }
}