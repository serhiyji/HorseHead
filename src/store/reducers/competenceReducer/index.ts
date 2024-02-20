import { CompetenceState, CompetenceActions, CompetenceActionTypes } from "./types"

const initialState: CompetenceState = {
    message: null,
    loading: false,
    error: null,
    selectedCompetence: {},
    allCompetence: []
}

const CompetenceReducer = (state = initialState, action: CompetenceActions): CompetenceState => {
    switch (action.type) {
        case CompetenceActionTypes.GETALL_COMPETENCE_REQUEST:
            return { ...state, allCompetence: action.payload.allCompetence };
        case CompetenceActionTypes.GET_COMPETENCE_SUCCESS:
            return {...state, selectedCompetence: action.payload.selectedCompetence}
        case CompetenceActionTypes.CREATE_COMPETENCE_SUCCESS:
            return {...state}
        default:
            return state;
    }
};

export default CompetenceReducer;