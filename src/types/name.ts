import exp from "constants";
import { NameString } from "./nameString";

export class Name {
	first: NameString;
	last: NameString;
	title?: Title;

	constructor(title: string, first: string, last: string) {
		if (first.trim() === "") {
			throw new Error("First name cannot be empty.");
		}
		if (last.trim() === "") {
			throw new Error("Last name cannot be empty.");
		}
		this.title = title as Title;
		this.first = new NameString(first);
		this.last = new NameString(last);
	}

	public toString = (): string => {
		return `${this.title} ${this.first} ${this.last}`;
	};
}

export type Title = "Mr" | "Mrs" | "Ms" | "Miss" | "Dr";
