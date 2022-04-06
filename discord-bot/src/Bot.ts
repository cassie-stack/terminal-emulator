import ControllerBase from "./Controllers/ControllerBase";
import ControllerGeneral from "./Controllers/ControllerGeneral";
import ControllerKinky from "./Controllers/ControllerKinky";
import RequestBase from "./Models/RequestBase";
import RequestCommand from "./Models/RequestCommand";
import ResponseBase from "./Models/ResponseBase";
import ResponseText from "./Models/ResponseText";
import log from "./Common/Logging";

export default class Bot {
    private readonly controllers: ControllerBase[];

    public constructor() {
        this.controllers = [
            new ControllerGeneral(),
            new ControllerKinky(),
        ];
    }

    public handle(request: RequestBase): ResponseBase {
        log.info(`Request received: ${JSON.stringify(request)}`);

        for (const controller of this.controllers) {
            const response = controller.handle(request);
            if (response != null) {
                log.info(`Response generated: ${JSON.stringify(response)}`);
                return response;
            }
        }

        if (request instanceof RequestCommand) {
            throw new Error(`command \`${request.commandKind}\` not yet implemented`);
        } else {
            throw new Error(`onteraction type not yet implemented`);
        }
    }
}
