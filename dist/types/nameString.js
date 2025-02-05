const VALID_NAME_CHARS = /^[a-zA-Z0-9'-]{1,35}$/;
export class NameString {
    name_str;
    constructor(name_str) {
        if (!this.isValidName(name_str)) {
            throw new Error("Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.");
        }
        this.name_str = name_str;
    }
    toString() { return this.name_str; }
    isValidName(name) {
        return VALID_NAME_CHARS.test(name);
    }
}
