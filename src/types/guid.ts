export class Guid {
	private value: string;
	private static readonly guidRegex: RegExp =
		/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

	constructor(value: string) {
		if (!Guid.isValidGuid(value)) {
			throw new Error("Invalid GUID format");
		}
		this.value = value;
	}

	private static isValidGuid(value: string): boolean {
		return this.guidRegex.test(value);
	}

	public toString(): string {
		return this.value;
	}
}
