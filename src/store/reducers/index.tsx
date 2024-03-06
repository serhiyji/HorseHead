import { combineReducers } from "redux";
import UserReducer from "./userReducer"; 
import CompetenceReducer from "./competenceReducer";
import ProgramLearningOutcomesReducer from "./programLearningOutcomesReducer";
import StandartEducationalProgramReducer from "./standartEducationalProgramReducer";


export const rootReducer = combineReducers({
    UserReducer,
    CompetenceReducer,
    ProgramLearningOutcomesReducer,
    StandartEducationalProgramReducer
})

export type  RootState = ReturnType<typeof rootReducer>;