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

    /** Enhanced equality check */
    public equals(other: unknown): boolean {
        return (
            Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && // ✅ Ensure same class type
            (other as this).value === this.value // ✅ Ensures TypeScript recognizes 'value'
        );
    }
}

