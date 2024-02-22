import { CompetenceActionTypes, CompetenceActions } from "../../reducers/competenceReducer/types";

import { Dispatch } from "redux"

import { GetAllCompetence, DeleteCompetence, setSelectedCompetence, UpdateCompetence, CreateCompetence, GetByUserIdCompetence } from "../../../services/api-competence-service"

export const GetAllCompetenceA = (page: number, pageSize: number, userId: string) => {
    return async (dispatch: Dispatch<CompetenceActions>) => {
        const data = await GetAllCompetence(page, pageSize, userId);
        const { response } = data;
        if (response.success) {
            dispatch({
                type: CompetenceActionTypes.GETALL_COMPETENCE_REQUEST, 
                payload: { 
                    allCompetence: response.payload,
                    pageNumber: response.pageNumber,
                    pageSize: response.pageSize,
                    totalCount: response.totalCount,
                    countPages: response.countPages,
                }
            });
        }
    }
};

export const GetCompetenceByUserIdA = (userId: string) => {
    return async (dispatch: Dispatch<CompetenceActions>) => {
        const data = await GetByUserIdCompetence(userId);
        const { response } = data;
        if (response.success) {
            dispatch({
                type: CompetenceActionTypes.GETALL_COMPETENCE_REQUEST, payload: { allCompetence: response.payload }
            });
        }
    }
}

export const DeleteCompetenceA = (id: number) => {
    return async (dispatch: Dispatch<CompetenceActions>) => {
        await DeleteCompetence(id);
        //GetAllCompetenceA(1, 2, "")(dispatch)
    }
}

export const SetSelectedCompetence = (competence: any) => {
    return async (dispatch: Dispatch<CompetenceActions>) => {
        dispatch({ type: CompetenceActionTypes.GET_COMPETENCE_SUCCESS, payload: {selectedCompetence: competence} });
        setSelectedCompetence(competence);
    };
};

export const UpdateCompetenceA = (competence: any) => {
    return async (dispatch: Dispatch<CompetenceActions>) => {
        await UpdateCompetence(competence);
        //GetAllCompetenceA()(dispatch)
    }
}

export const CreateCompetenceA = (competence: any) => {
    return async (dispatch: Dispatch<CompetenceActions>) => {
        try {
            await CreateCompetence(competence);
            dispatch({
                type: CompetenceActionTypes.CREATE_COMPETENCE_SUCCESS, payload: { message: "Competence has been added" }
            });
        }
        catch (ex) {
            dispatch({
                type: CompetenceActionTypes.CREATE_COMPETENCE_SUCCESS, payload: "Unknown error!"
            });
        }
        //GetAllCompetenceA(1, 10, "")(dispatch)
    }
}