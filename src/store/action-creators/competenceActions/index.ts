import { CompetenceActionTypes, CompetenceActions } from "../../reducers/competenceReducer/types";

import { Dispatch } from "redux"
import { toast } from "react-toastify"
import jwtDecode from "jwt-decode"

import { GetAllCompetence } from "../../../services/api-competence-service"

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