import * as UserActionCreator from "./userActions";
import * as CompetenceActionCreator from "./competenceActions";
import * as ProgramLearningOutcomesCreator from "./programLearningOutcomesActions";
import * as SpecialtyCreator from "./specialtyActions";

export default {
    ...UserActionCreator,
    ...CompetenceActionCreator,
    ...ProgramLearningOutcomesCreator,
    ...SpecialtyCreator
}