import { DomainModel } from "./DomainModel";

export abstract class Guid<T extends Guid<T>> extends DomainModel<string> {
    protected constructor(value: string) {
        super(value);
    }

    /** Ensures the GUID is valid */
    protected validate(): void {
        if (!Guid.isValidGuid(this.value)) {
            throw new Error(`Invalid GUID format: ${this.value}`);
        }
    }

    /** Validate if a string is a well-formed UUID */
    private static isValidGuid(value: string): boolean {
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(value);
    }

    /** Correctly instantiate subclasses with `T` */
    public static generate<T extends Guid<T>>(this: new (value: string) => T): T {
        return new this(crypto.randomUUID());
    }


    /** Enhanced equality check */
    public equals(other: unknown): boolean {
        return (
            other instanceof this.constructor && // Ensure they are the same subclass
            other.value === this.value // Ensure they have the same GUID string
        );
    }
}
