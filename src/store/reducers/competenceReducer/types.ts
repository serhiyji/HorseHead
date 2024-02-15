export interface CompetenceState{
    message: null,
    loading: false,
    error: null,
    allCompetence: []
}

export enum CompetenceActionTypes {
    GETALL_REQUEST = "GETALL_REQUEST"
}

interface GetAllAction {
    type: CompetenceActionTypes.GETALL_REQUEST,
    payload: any
}

export type CompetenceActions = | GetAllAction