import { CommandKind } from "../Common/Enums";
import RequestCommand from "../Models/RequestCommand";
import ResponseText from "../Models/ResponseText";
import ControllerKinky from "./ControllerKinky";

test("ping", () => {
    const controller = new ControllerKinky();
    const response = controller.handle(new RequestCommand(CommandKind.Cum));
    expect(response).toBeInstanceOf(ResponseText);
    expect((response as ResponseText).text).toMatch(/cum/i);
});
