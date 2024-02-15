import { CompetenceState, CompetenceActions, CompetenceActionTypes } from "./types"

const initialState: CompetenceState = {
    message: null,
    loading: false,
    error: null,
    allCompetence: []
}

const CompetenceReducer = (state = initialState, action: CompetenceActions): CompetenceState => {
    switch (action.type) {
        case CompetenceActionTypes.GETALL_REQUEST:
            return { ...state, allCompetence: action.payload.allCompetence };
        default:
            return state;
    }
};
  
export default CompetenceReducer;