import * as UserActionCreator from "./userActions";
import * as CompetenceActionCreator from "./competenceActions";
import * as ProgramLearningOutcomesCreator from "./programLearningOutcomesActions";
import * as StandartEducationalProgramCeator from "./standartEducationalProgramActions";

export default {
    ...UserActionCreator,
    ...CompetenceActionCreator,
    ...ProgramLearningOutcomesCreator,
    ...StandartEducationalProgramCeator
}