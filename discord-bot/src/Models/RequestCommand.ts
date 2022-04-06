import { CommandKind } from "../Common/Enums";
import RequestBase from "./RequestBase";

export default class RequestCommand extends RequestBase {
    public constructor(
        public readonly commandKind: CommandKind,
    ) {
        super();
    }
}
