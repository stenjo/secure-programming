const VALID_NAME_CHARS = /^[a-zæøåA-ZÆØÅ0-9'`-]{1,75}$/;

export class NameString {
	name_str: string;

	constructor(name_str: string) {
		if (!this.isValidName(name_str)) {
			throw new Error(
				`Invalid name: ${name_str} must be 35 characters or less and contain only letters, numbers, and apostrophes.`,
			);
		}
		this.name_str = name_str;
	}

	public toString(): string {
		return this.name_str;
	}

	private isValidName(name: string): boolean {
		return VALID_NAME_CHARS.test(name);
	}
}
