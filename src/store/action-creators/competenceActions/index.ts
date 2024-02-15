import { CompetenceActionTypes, CompetenceActions } from "../../reducers/competenceReducer/types";

import { Dispatch } from "redux"

import { GetAllCompetence, DeleteCompetence, setSelectedCompetence, UpdateCompetence, CreateCompetence } from "../../../services/api-competence-service"

export const GetAllCompetenceA = () => {
    return async (dispatch: Dispatch<CompetenceActions>) => {
        const data = await GetAllCompetence();
        const { response } = data;
        if (response.success) {
            dispatch({
                type: CompetenceActionTypes.GETALL_REQUEST, payload: { allCompetence: response.payload }
            });
        }
    }
};

export const DeleteCompetenceA = (id: number) => {
    console.log(id + "DEL1");
    return async (dispatch: Dispatch<CompetenceActions>) => {
        console.log(id + "DEL2");
        await DeleteCompetence(id);
        GetAllCompetenceA()(dispatch)
    }
}

export const SetSelectedCompetence = (competence: any) => {
    return async (dispatch: Dispatch<CompetenceActions>) => {
        dispatch({ type: CompetenceActionTypes.GETCOMPETENCEBUID_SUCCESS, payload: {selectedCompetence: competence} });
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
                type: CompetenceActionTypes.CREATECOMPETENCE_SUCCESS, payload: { message: "Competence has been added" }
            });
        }
        catch (ex) {
            dispatch({
                type: CompetenceActionTypes.CREATECOMPETENCE_SUCCESS, payload: "Unknown error!"
            });
        }
    }
}