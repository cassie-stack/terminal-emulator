import ResponseBase from "./ResponseBase";

export default class ResponseText extends ResponseBase {
    public constructor(
        public readonly text: string
    ) {
        super();
    }
}
