import { FileName } from "./models/FileName";
import { ProjectGuid } from "./models/ProjectGuid";

const guid = ProjectGuid.create("550e8400-e29b-41d4-a716-446655440000");
console.log(guid.toString()); // ✅ "550e8400-e29b-41d4-a716-446655440000"

// ✅ Auto-generates a valid GUID
const newGuid = ProjectGuid.generate();
console.log(newGuid.toString()); // Random UUID

// ✅ Comparison check
const anotherGuid = ProjectGuid.create("550e8400-e29b-41d4-a716-446655440000");
console.log(guid.equals(anotherGuid)); // ✅ true

// ❌ Invalid GUID should throw an error
try {
    ProjectGuid.create("invalid-guid");
} catch (error: Error | unknown) {
    console.error((error as Error).message); // "Invalid GUID format: invalid-guid"
}

// ✅ FileName works the same way
const file = new FileName("valid_filename.txt");
console.log(file.toString()); // "valid_filename.txt"

// ❌ Invalid filename should throw an error
try {
    new FileName("invalid/file?.txt");
} catch (error: Error | unknown) {
    console.error((error as Error).message); // "Filename contains invalid characters..."
}
