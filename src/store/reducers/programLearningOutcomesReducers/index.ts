import { ProgramLearningOutcomesActions, ProgramLearningOutcomesState, ProgramLearningOutcomesActionTypes } from "./types"

const initialState: ProgramLearningOutcomesState = {
    message: null,
    loading: false,
    error: null,
    selectedProgramLearningOutcomes: {},
    allProgramLearningOutcomes: []
}

const ProgramLearningOutcomesReducer = (state = initialState, action: ProgramLearningOutcomesActions): ProgramLearningOutcomesState => {
    switch (action.type) {
        case ProgramLearningOutcomesActionTypes.GETALL_PROGRAMLEARNINGOUTSOMES_REQUEST:
            return { ...state, allProgramLearningOutcomes: action.payload.allProgramLearningOutcomes };
        case ProgramLearningOutcomesActionTypes.GETBUID_PROGRAMLEARNINGOUTSOMES_SUCCESS:
            return {...state, selectedProgramLearningOutcomes: action.payload.selectedProgramLearningOutcomes}
        case ProgramLearningOutcomesActionTypes.CREATE_PROGRAMLEARNINGOUTSOMES_SUCCESS:
            return {...state}
        default:
            return state;
    }
};

export default ProgramLearningOutcomesReducer;