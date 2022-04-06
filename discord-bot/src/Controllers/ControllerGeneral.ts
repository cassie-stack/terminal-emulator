import { CommandKind } from "../Common/Enums";
import RequestBase from "../Models/RequestBase";
import RequestCommand from "../Models/RequestCommand";
import ResponseBase from "../Models/ResponseBase";
import ResponseText from "../Models/ResponseText";
import ControllerBase from "./ControllerBase";

export default class ControllerGeneral extends ControllerBase {
    public override handle(request: RequestBase): ResponseBase | undefined {
        if (request instanceof RequestCommand) {
            switch(request.commandKind) {
                case CommandKind.Ping: {
                    return new ResponseText("Pong!");
                }
            }
        }
    }
}
