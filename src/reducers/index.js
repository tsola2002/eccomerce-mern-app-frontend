import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

// combine reducer function will combine as many reducers as we like
const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;