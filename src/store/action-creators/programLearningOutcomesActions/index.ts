import { ProgramLearningOutcomesState, ProgramLearningOutcomesActions, ProgramLearningOutcomesActionTypes } from "../../reducers/programLearningOutcomesReducer/types"

import { Dispatch } from "redux"

import { GetAllProgramLearningOutcomes, DeleteProgramLearningOutcomes, setSelectedProgramLearningOutcomes, UpdateProgramLearningOutcomes, CreateProgramLearningOutcomes, GetByUserIdProgramLearningOutcomes } from "../../../services/api-ProgramLearningOutcomes-service"

export const GetAllProgramLearningOutcomesA = (page: number, pageSize: number, userId: string) => {
    return async (dispatch: Dispatch<ProgramLearningOutcomesActions>) => {
        const data = await GetAllProgramLearningOutcomes(page, pageSize, userId);
        const { response } = data;
        if (response.success) {
            dispatch({
                type: ProgramLearningOutcomesActionTypes.GETALL_PROGRAMLEARNINGOUTSOMES_REQUEST, 
                payload: { 
                    allProgramLearningOutcomes: response.payload,
                    pageNumber: response.pageNumber,
                    pageSize: response.pageSize,
                    totalCount: response.totalCount,
                    countPages: response.countPages,
                 }
            });
        }
    }
};

export const GetProgramLearningOutcomesByUserIdA = (userId: string) => {
    return async (dispatch: Dispatch<ProgramLearningOutcomesActions>) => {
        const data = await GetByUserIdProgramLearningOutcomes(userId);
        const { response } = data;
        if (response.success) {
            dispatch({
                type: ProgramLearningOutcomesActionTypes.GETALL_PROGRAMLEARNINGOUTSOMES_REQUEST, payload: { allProgramLearningOutcomes: response.payload }
            });
        }
    }
}

export const DeleteProgramLearningOutcomesA = (id: number) => {
    return async (dispatch: Dispatch<ProgramLearningOutcomesActions>) => {
        await DeleteProgramLearningOutcomes(id);
        //GetAllProgramLearningOutcomesA()(dispatch)
    }
}

export const SetSelectedProgramLearningOutcomes = (ProgramLearningOutcomes: any) => {
    return async (dispatch: Dispatch<ProgramLearningOutcomesActions>) => {
        dispatch({ type: ProgramLearningOutcomesActionTypes.GETBUID_PROGRAMLEARNINGOUTSOMES_SUCCESS, payload: {selectedProgramLearningOutcomes: ProgramLearningOutcomes} });
        setSelectedProgramLearningOutcomes(ProgramLearningOutcomes);
    };
};

export const UpdateProgramLearningOutcomesA = (ProgramLearningOutcomes: any) => {
    return async (dispatch: Dispatch<ProgramLearningOutcomesActions>) => {
        await UpdateProgramLearningOutcomes(ProgramLearningOutcomes);
    }
}

export const CreateProgramLearningOutcomesA = (ProgramLearningOutcomes: any) => {
    return async (dispatch: Dispatch<ProgramLearningOutcomesActions>) => {
        try {
            await CreateProgramLearningOutcomes(ProgramLearningOutcomes);
            dispatch({
                type: ProgramLearningOutcomesActionTypes.CREATE_PROGRAMLEARNINGOUTSOMES_SUCCESS, payload: { message: "ProgramLearningOutcomes has been added" }
            });
        }
        catch (ex) {
            dispatch({
                type: ProgramLearningOutcomesActionTypes.CREATE_PROGRAMLEARNINGOUTSOMES_SUCCESS, payload: "Unknown error!"
            });
        }
    }
}