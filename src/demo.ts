import { FileName } from "./models/FileName";
import { ProjectGuid } from "./models/ProjectGuid";

const response = 
    {
      "file": {
        "uuid": "c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c",
        "email": "john.doe@example.com",
        "filename": "example.txt"
      },
    }

    class File {
        constructor(
            public uuid: ProjectGuid,
            public email: string,
            public filename: FileName
        ) {}
    
        /** Factory method to safely create a File instance from raw JSON */
        public static fromResponse(response: any): File {
            return new File(
                ProjectGuid.create(response.file.uuid),  // ✅ Convert string to ProjectGuid
                response.file.email,
                FileName.create(response.file.filename)  // ✅ Convert string to FileName
            );
        }
    }
    
// ✅ Convert JSON response into a File object
const file = File.fromResponse(response);

console.log(file.uuid.toString());  // ✅ "c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c"
console.log(file.filename.toString()); // ✅ "example.txt"
console.log(file.email);  // ✅ "john.doe@example.com"

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
const filename = new FileName("valid_filename.txt");
console.log(filename.toString()); // "valid_filename.txt"

// ❌ Invalid filename should throw an error
try {
    new FileName("invalid/file?.txt");
} catch (error: Error | unknown) {
    console.error((error as Error).message); // "Filename contains invalid characters..."
}
