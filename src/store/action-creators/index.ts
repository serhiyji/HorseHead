import * as UserActionCreator from "./userActions";
import * as CompetenceActionCreator from "./competenceActions"

export default {
    ...UserActionCreator,
    ...CompetenceActionCreator
}