import { CompetenceActionTypes, CompetenceActions } from "../../reducers/competenceReducer/types";

import { Dispatch } from "redux"

import { GetAllCompetence, DeleteCompetence, setSelectedCompetence, UpdateCompetence, CreateCompetence, GetByUserIdCompetence } from "../../../services/api-competence-service"

export const GetAllCompetenceA = () => {
    return async (dispatch: Dispatch<CompetenceActions>) => {
        const data = await GetAllCompetence();
        const { response } = data;
        if (response.success) {
            dispatch({
                type: CompetenceActionTypes.GETALL_COMPETENCE_REQUEST, payload: { allCompetence: response.payload }
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
        GetAllCompetenceA()(dispatch)
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
    }
}