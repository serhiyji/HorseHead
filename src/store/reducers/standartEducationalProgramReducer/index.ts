import { StandartEducationalProgramState, StandartEducationalProgramActions, StandartEducationalProgramActionTypes } from "./types"

const initialState: StandartEducationalProgramState = {
    message: null,
    loading: false,
    error: null,
    selectedStandartEducationalProgram: {},
    allStandartEducationalProgram: [],
    pageNumber: 0,
    pageSize: 0,
    totalCount: 0,
    countPages: 0,
}

const StandartEducationalProgramReducer = (state = initialState, action: StandartEducationalProgramActions): StandartEducationalProgramState => {
    switch (action.type) {
        case StandartEducationalProgramActionTypes.GETALL_STADDARTEDUCATIONALPROGRAM_REQUEST:
            return { ...state, 
                        allStandartEducationalProgram: action.payload.allStandartEducationalProgram,
                        pageNumber: action.payload.pageNumber,
                        pageSize: action.payload.pageSize,
                        totalCount: action.payload.totalCount,
                        countPages: action.payload.countPages,
                    };
        case StandartEducationalProgramActionTypes.GET_STADDARTEDUCATIONALPROGRAM_SUCCESS:
            return {...state, selectedStandartEducationalProgram: action.payload.selectedStandartEducationalProgram}
        case StandartEducationalProgramActionTypes.CREATE_STADDARTEDUCATIONALPROGRAM_SUCCESS:
            return {...state}
        default:
            return state;
    }
};

export default StandartEducationalProgramReducer;