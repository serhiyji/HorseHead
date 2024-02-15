import { combineReducers } from "redux";
import UserReducer from "./userReducer"; 
import CompetenceReducer from "./competenceReducer";


export const rootReducer = combineReducers({
    UserReducer,
    CompetenceReducer
})

export type  RootState = ReturnType<typeof rootReducer>;