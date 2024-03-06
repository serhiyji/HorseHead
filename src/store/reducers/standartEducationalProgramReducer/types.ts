export interface StandartEducationalProgramState{
    message: null,
    loading: false,
    error: null,
    selectedStandartEducationalProgram: any,
    allStandartEducationalProgram: [],
    pageNumber: number,
    pageSize: number,
    totalCount: number,
    countPages: number,
}

export enum StandartEducationalProgramActionTypes {
    GETALL_STADDARTEDUCATIONALPROGRAM_REQUEST = "GETALLSTADDARTEDUCATIONALPROGRAM_REQUEST",
    GET_STADDARTEDUCATIONALPROGRAM_SUCCESS = "GETSTADDARTEDUCATIONALPROGRAM_SUCCESS",
    CREATE_STADDARTEDUCATIONALPROGRAM_SUCCESS = "CREATESTADDARTEDUCATIONALPROGRAM_SUCCESS"
}

interface GetAllStandartEducationalProgramAction {
    type: StandartEducationalProgramActionTypes.GETALL_STADDARTEDUCATIONALPROGRAM_REQUEST,
    payload: any
}

interface GetStandartEducationalProgramByIdAction {
    type: StandartEducationalProgramActionTypes.GET_STADDARTEDUCATIONALPROGRAM_SUCCESS,
    payload: any
}

interface CreateStandartEducationalProgramAction {
    type: StandartEducationalProgramActionTypes.CREATE_STADDARTEDUCATIONALPROGRAM_SUCCESS,
    payload: any
}

export type StandartEducationalProgramActions = 
| GetAllStandartEducationalProgramAction
| GetStandartEducationalProgramByIdAction
| CreateStandartEducationalProgramAction