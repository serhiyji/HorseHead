import * as UserActionCreator from "./userActions";
import * as CompetenceActionCreator from "./competenceActions";
import * as ProgramLearningOutcomesCreator from "./programLearningOutcomesActions";

export default {
    ...UserActionCreator,
    ...CompetenceActionCreator,
    ...ProgramLearningOutcomesCreator
}