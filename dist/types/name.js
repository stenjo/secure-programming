import { NameString } from "./nameString";
export class Name {
    first;
    last;
    constructor(first, last) {
        if (first.trim() === "") {
            throw new Error("First name cannot be empty.");
        }
        if (last.trim() === "") {
            throw new Error("Last name cannot be empty.");
        }
        this.first = new NameString(first);
        this.last = new NameString(last);
    }
    ;
    toString = () => {
        return `${this.first} ${this.last}`;
    };
}
