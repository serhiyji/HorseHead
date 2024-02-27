export interface SpecialtyState{
    message: null,
    loading: false,
    error: null,
    selectedSpecialty: any,
    allSpecialty: [],
    pageNumber: number,
    pageSize: number,
    totalCount: number,
    countPages: number,
}

export enum SpecialtyActionTypes {
    GETALL_SPECIALTY_REQUEST = "GETALLSPECIALTY_REQUEST",
    GET_SPECIALTY_SUCCESS = "GETSPECIALTY_SUCCESS",
    CREATE_SPECIALTY_SUCCESS = "CREATESPECIALTY_SUCCESS"
}

interface GetAllSpecialtyAction {
    type: SpecialtyActionTypes.GETALL_SPECIALTY_REQUEST,
    payload: any
}

interface GetSpecialtyByIdAction {
    type: SpecialtyActionTypes.GET_SPECIALTY_SUCCESS,
    payload: any
}

interface CreateSpecialtyAction {
    type: SpecialtyActionTypes.CREATE_SPECIALTY_SUCCESS,
    payload: any
}

export type SpecialtyActions = 
| GetAllSpecialtyAction
| GetSpecialtyByIdAction
| CreateSpecialtyAction