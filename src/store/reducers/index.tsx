import { combineReducers } from "redux";
import UserReducer from "./userReducer"; 
import CompetenceReducer from "./competenceReducer";
import ProgramLearningOutcomesReducer from "./programLearningOutcomesReducers";


export const rootReducer = combineReducers({
    UserReducer,
    CompetenceReducer,
    ProgramLearningOutcomesReducer
})

export type  RootState = ReturnType<typeof rootReducer>;