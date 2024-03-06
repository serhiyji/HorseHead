import { StandartEducationalProgramActionTypes, StandartEducationalProgramActions } from "../../reducers/standartEducationalProgramReducer/types";

import { Dispatch } from "redux"

import { GetAllStandartEducationalProgram, DeleteStandartEducationalProgram, setSelectedStandartEducationalProgram, UpdateStandartEducationalProgram, CreateStandartEducationalProgram } from "../../../services/api-StandartEducationalProgram-service"

export const GetAllStandartEducationalProgramA = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<StandartEducationalProgramActions>) => {
        const data = await GetAllStandartEducationalProgram(page, pageSize);
        const { response } = data;
        if (response.success) {
            dispatch({
                type: StandartEducationalProgramActionTypes.GETALL_STADDARTEDUCATIONALPROGRAM_REQUEST, 
                payload: { 
                    allStandartEducationalProgram: response.payload,
                    pageNumber: response.pageNumber,
                    pageSize: response.pageSize,
                    totalCount: response.totalCount,
                    countPages: response.countPages,
                }
            });
        }
    }
};

export const DeleteStandartEducationalProgramA = (id: number) => {
    return async (dispatch: Dispatch<StandartEducationalProgramActions>) => {
        await DeleteStandartEducationalProgram(id);
        //GetAllStandartEducationalProgramA(1, 2, "")(dispatch)
    }
}

export const SetSelectedStandartEducationalProgram = (standartEducationalProgram: any) => {
    return async (dispatch: Dispatch<StandartEducationalProgramActions>) => {
        dispatch({ type: StandartEducationalProgramActionTypes.GET_STADDARTEDUCATIONALPROGRAM_SUCCESS, payload: {selectedStandartEducationalProgram: standartEducationalProgram} });
        setSelectedStandartEducationalProgram(standartEducationalProgram);
    };
};

export const UpdateStandartEducationalProgramA = (standartEducationalProgram: any) => {
    return async (dispatch: Dispatch<StandartEducationalProgramActions>) => {
        await UpdateStandartEducationalProgram(standartEducationalProgram);
        //GetAllStandartEducationalProgramA()(dispatch)
    }
}

export const CreateStandartEducationalProgramA = (standartEducationalProgram: any) => {
    return async (dispatch: Dispatch<StandartEducationalProgramActions>) => {
        try {
            console.log(standartEducationalProgram);
            await CreateStandartEducationalProgram(standartEducationalProgram);
            dispatch({
                type: StandartEducationalProgramActionTypes.CREATE_STADDARTEDUCATIONALPROGRAM_SUCCESS, payload: { message: "StandartEducationalProgram has been added" }
            });
        }
        catch (ex) {
            dispatch({
                type: StandartEducationalProgramActionTypes.CREATE_STADDARTEDUCATIONALPROGRAM_SUCCESS, payload: "Unknown error!"
            });
        }
        //GetAllStandartEducationalProgramA(1, 10, "")(dispatch)
    }
}