import { Guid } from "./Guid";

export class PipeGuid extends Guid<PipeGuid> {
    constructor(value: string) {
        super(value);
    }

    /** Factory method for controlled instantiation */
    public static create(value: string): PipeGuid {
        return new PipeGuid(value);
    }
}
