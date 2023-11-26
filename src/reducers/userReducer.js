export function userReducer(
    state = { email: "something", token: 123 }, action) {

    // cases for different action types and how it will be handled
    switch (action.type) {
        case "LOGGED_IN_USER":
            return action.payload;
        
        case "LOGOUT":
            return action.payload;
        default:
            return state;
    }
}