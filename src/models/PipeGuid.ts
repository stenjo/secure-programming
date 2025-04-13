import { Guid } from "./Guid";

export class PipeGuid extends Guid<PipeGuid> {
	/** Factory method for controlled instantiation */
	public static create(value: string): PipeGuid {
		return new PipeGuid(value);
	}

	/** Ensure constructor is protected */
	protected constructor(value: string) {
		super(value);
	}
}
