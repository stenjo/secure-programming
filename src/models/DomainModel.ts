export abstract class DomainModel<T> {
    protected readonly value: T;

    protected constructor(value: T) {
        if (value === null || value === undefined) {
            throw new Error("DomainModel value cannot be null or undefined.");
        }

        this.value = value;
        this.validate(); // Ensure subclass validation runs automatically
    }

    /** Subclasses can override this method for validation */
    protected validate(): void {}

    /** Returns the stored value */
    public toString(): string {
        return String(this.value);
    }

    /** Check if two DomainModel objects are equal */
    public equals(other: this): boolean {
        return this.value === other.value;
    }
}
