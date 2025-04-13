"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
const nameString_1 = require("./nameString");
class Name {
    first;
    last;
    title;
    constructor(title, first, last) {
        if (first.trim() === "") {
            throw new Error("First name cannot be empty.");
        }
        if (last.trim() === "") {
            throw new Error("Last name cannot be empty.");
        }
        this.title = title;
        this.first = new nameString_1.NameString(first);
        this.last = new nameString_1.NameString(last);
    }
    toString = () => {
        return `${this.title} ${this.first} ${this.last}`;
    };
}
exports.Name = Name;
//# sourceMappingURL=name.js.map