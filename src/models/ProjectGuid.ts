import { Guid } from "./Guid";

export class ProjectGuid extends Guid<ProjectGuid> {
    constructor(value: string) {
        super(value);
    }

    /** Factory method for controlled instantiation */
    public static create(value: string): ProjectGuid {
        return new ProjectGuid(value);
    }


}
