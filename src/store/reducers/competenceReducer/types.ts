export interface CompetenceState{
    message: null,
    loading: false,
    error: null,
    selectedCompetence: any,
    allCompetence: []
}

export enum CompetenceActionTypes {
    GETALL_COMPETENCE_REQUEST = "GETALLCOMPETENCE_REQUEST",
    GET_COMPETENCE_SUCCESS = "GETCOMPETENCE_SUCCESS",
    CREATE_COMPETENCE_SUCCESS = "CREATECOMPETENCE_SUCCESS"
}

interface GetAllCompetenceAction {
    type: CompetenceActionTypes.GETALL_COMPETENCE_REQUEST,
    payload: any
}

interface GetCompetenceByIdAction {
    type: CompetenceActionTypes.GET_COMPETENCE_SUCCESS,
    payload: any
}

interface CreateCompetenceAction {
    type: CompetenceActionTypes.CREATE_COMPETENCE_SUCCESS,
    payload: any
}

export type CompetenceActions = 
| GetAllCompetenceAction
| GetCompetenceByIdAction
| CreateCompetenceAction