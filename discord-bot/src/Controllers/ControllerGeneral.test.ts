import { CommandKind } from "../Common/Enums";
import RequestCommand from "../Models/RequestCommand";
import ResponseText from "../Models/ResponseText";
import ControllerGeneral from "./ControllerGeneral";

test("ping", () => {
    const controller = new ControllerGeneral();
    const response = controller.handle(new RequestCommand(CommandKind.Ping));
    expect(response).toBeInstanceOf(ResponseText);
    expect((response as ResponseText).text).toMatch(/pong/i);
});
