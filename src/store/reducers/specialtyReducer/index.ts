import { SpecialtyState, SpecialtyActions, SpecialtyActionTypes } from "./types"

const initialState: SpecialtyState = {
    message: null,
    loading: false,
    error: null,
    selectedSpecialty: {},
    allSpecialty: [],
    pageNumber: 0,
    pageSize: 0,
    totalCount: 0,
    countPages: 0,
}

const SpecialtyReducer = (state = initialState, action: SpecialtyActions): SpecialtyState => {
    switch (action.type) {
        case SpecialtyActionTypes.GETALL_SPECIALTY_REQUEST:
            return { ...state, 
                        allSpecialty: action.payload.allSpecialty,
                        pageNumber: action.payload.pageNumber,
                        pageSize: action.payload.pageSize,
                        totalCount: action.payload.totalCount,
                        countPages: action.payload.countPages,
                    };
        case SpecialtyActionTypes.GET_SPECIALTY_SUCCESS:
            return {...state, selectedSpecialty: action.payload.selectedSpecialty}
        case SpecialtyActionTypes.CREATE_SPECIALTY_SUCCESS:
            return {...state}
        default:
            return state;
    }
};

export default SpecialtyReducer;