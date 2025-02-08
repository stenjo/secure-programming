import { DomainModel } from "./DomainModel";

export class FileName extends DomainModel<string> {
    static readonly MAX_LENGTH = 60;
    private static readonly ALLOWED_CHARACTERS = /^[a-zA-Z0-9._-]+$/;
    
    static create(filename: any): FileName {
        return new FileName(filename);
    }
    /** Ensure filename follows rules */
    protected validate(): void {

        if (typeof this.value !== "string") {
            throw new Error("Filename is not a string.");
        }
        if (this.value.length > FileName.MAX_LENGTH) {
            throw new Error(`Filename exceeds max length of ${FileName.MAX_LENGTH} characters.`);
         }

        if (!FileName.ALLOWED_CHARACTERS.test(this.value)) {
            throw new Error("Filename contains invalid characters. Allowed: letters, numbers, dots, dashes, and underscores.");
        }
    }

}
