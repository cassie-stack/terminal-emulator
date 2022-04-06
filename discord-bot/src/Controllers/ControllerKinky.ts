import { CommandKind } from "../Common/Enums";
import RequestBase from "../Models/RequestBase";
import RequestCommand from "../Models/RequestCommand";
import ResponseBase from "../Models/ResponseBase";
import ResponseText from "../Models/ResponseText";
import ControllerBase from "./ControllerBase";
import log, { logCommand } from "../Common/Logging";

export default class ControllerKinky extends ControllerBase {
    public override handle(request: RequestBase): ResponseBase | undefined {
        if (request instanceof RequestCommand) {
            switch(request.commandKind) {
                case CommandKind.Cum: {
                    logCommand("cum");
                    return new ResponseText("Sophie has been commanded to cum.");
                }
            }
        }
    }
}
