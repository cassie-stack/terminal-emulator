import RequestBase from "../Models/RequestBase";
import ResponseBase from "../Models/ResponseBase";

export default abstract class ControllerBase {
    public abstract handle(request: RequestBase): ResponseBase | undefined;
}
