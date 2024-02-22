import { CompetenceState, CompetenceActions, CompetenceActionTypes } from "./types"

const initialState: CompetenceState = {
    message: null,
    loading: false,
    error: null,
    selectedCompetence: {},
    allCompetence: [],
    pageNumber: 0,
    pageSize: 0,
    totalCount: 0,
    countPages: 0,
}

const CompetenceReducer = (state = initialState, action: CompetenceActions): CompetenceState => {
    switch (action.type) {
        case CompetenceActionTypes.GETALL_COMPETENCE_REQUEST:
            return { ...state, 
                        allCompetence: action.payload.allCompetence,
                        pageNumber: action.payload.pageNumber,
                        pageSize: action.payload.pageSize,
                        totalCount: action.payload.totalCount,
                        countPages: action.payload.countPages,
                    };
        case CompetenceActionTypes.GET_COMPETENCE_SUCCESS:
            return {...state, selectedCompetence: action.payload.selectedCompetence}
        case CompetenceActionTypes.CREATE_COMPETENCE_SUCCESS:
            return {...state}
        default:
            return state;
    }
};

export default CompetenceReducer;