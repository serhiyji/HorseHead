import { combineReducers } from "redux";
import UserReducer from "./userReducer"; 
import CompetenceReducer from "./competenceReducer";
import ProgramLearningOutcomesReducer from "./programLearningOutcomesReducers";
import SpecialtyReducer from "./specialtyReducer";


export const rootReducer = combineReducers({
    UserReducer,
    CompetenceReducer,
    ProgramLearningOutcomesReducer,
    SpecialtyReducer
})

export type  RootState = ReturnType<typeof rootReducer>;