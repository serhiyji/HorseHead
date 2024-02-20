export interface ProgramLearningOutcomesState{
    message: null,
    loading: false,
    error: null,
    selectedProgramLearningOutcomes: any,
    allProgramLearningOutcomes: []
}

export enum ProgramLearningOutcomesActionTypes {
    GETALL_PROGRAMLEARNINGOUTSOMES_REQUEST = "GETALL_PROGRAMLEARNINGOUTSOMES_REQUEST",
    GETBUID_PROGRAMLEARNINGOUTSOMES_SUCCESS = "GETBUID_PROGRAMLEARNINGOUTSOMES_SUCCESS",
    CREATE_PROGRAMLEARNINGOUTSOMES_SUCCESS = "CREATE_PROGRAMLEARNINGOUTSOMES_SUCCESS"
}

interface GetAllProgramLearningOutcomesAction {
    type: ProgramLearningOutcomesActionTypes.GETALL_PROGRAMLEARNINGOUTSOMES_REQUEST,
    payload: any
}

interface GetProgramLearningOutcomesByIdAction {
    type: ProgramLearningOutcomesActionTypes.GETBUID_PROGRAMLEARNINGOUTSOMES_SUCCESS,
    payload: any
}

interface CreateProgramLearningOutcomesAction {
    type: ProgramLearningOutcomesActionTypes.CREATE_PROGRAMLEARNINGOUTSOMES_SUCCESS,
    payload: any
}

export type ProgramLearningOutcomesActions = 
| GetAllProgramLearningOutcomesAction
| GetProgramLearningOutcomesByIdAction
| CreateProgramLearningOutcomesAction