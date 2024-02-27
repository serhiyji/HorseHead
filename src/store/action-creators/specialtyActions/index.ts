import { SpecialtyActionTypes, SpecialtyActions } from "../../reducers/specialtyReducer/types";

import { Dispatch } from "redux"

import { GetAllSpecialty, DeleteSpecialty, setSelectedSpecialty, UpdateSpecialty, CreateSpecialty } from "../../../services/api-specialty-service"

export const GetAllSpecialtyA = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<SpecialtyActions>) => {
        const data = await GetAllSpecialty(page, pageSize);
        const { response } = data;
        if (response.success) {
            dispatch({
                type: SpecialtyActionTypes.GETALL_SPECIALTY_REQUEST, 
                payload: { 
                    allSpecialty: response.payload,
                    pageNumber: response.pageNumber,
                    pageSize: response.pageSize,
                    totalCount: response.totalCount,
                    countPages: response.countPages,
                }
            });
        }
    }
};

export const DeleteSpecialtyA = (id: number) => {
    return async (dispatch: Dispatch<SpecialtyActions>) => {
        await DeleteSpecialty(id);
        //GetAllSpecialtyA(1, 2, "")(dispatch)
    }
}

export const SetSelectedSpecialty = (specialty: any) => {
    return async (dispatch: Dispatch<SpecialtyActions>) => {
        dispatch({ type: SpecialtyActionTypes.GET_SPECIALTY_SUCCESS, payload: {selectedSpecialty: specialty} });
        setSelectedSpecialty(specialty);
    };
};

export const UpdateSpecialtyA = (specialty: any) => {
    return async (dispatch: Dispatch<SpecialtyActions>) => {
        await UpdateSpecialty(specialty);
        //GetAllSpecialtyA()(dispatch)
    }
}

export const CreateSpecialtyA = (specialty: any) => {
    return async (dispatch: Dispatch<SpecialtyActions>) => {
        try {
            await CreateSpecialty(specialty);
            dispatch({
                type: SpecialtyActionTypes.CREATE_SPECIALTY_SUCCESS, payload: { message: "Specialty has been added" }
            });
        }
        catch (ex) {
            dispatch({
                type: SpecialtyActionTypes.CREATE_SPECIALTY_SUCCESS, payload: "Unknown error!"
            });
        }
        //GetAllSpecialtyA(1, 10, "")(dispatch)
    }
}