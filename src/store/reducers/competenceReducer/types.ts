export interface CompetenceState{
    message: null,
    loading: false,
    error: null,
    selectedCompetence: any,
    allCompetence: []
}

export enum CompetenceActionTypes {
    GETALL_REQUEST = "GETALL_REQUEST",
    GETCOMPETENCEBUID_SUCCESS = "GETCOMPETENCEBUID_SUCCESS",
    CREATECOMPETENCE_SUCCESS = "CREATECOMPETENCE_SUCCESS"
}

interface GetAllAction {
    type: CompetenceActionTypes.GETALL_REQUEST,
    payload: any
}

interface GetCompetenceByIdAction {
    type: CompetenceActionTypes.GETCOMPETENCEBUID_SUCCESS,
    payload: any
}

interface CreateCompetenceAction {
    type: CompetenceActionTypes.CREATECOMPETENCE_SUCCESS,
    payload: any
}

export type CompetenceActions = 
| GetAllAction
| GetCompetenceByIdAction
| CreateCompetenceAction