"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileName_1 = require("./models/FileName");
var ProjectGuid_1 = require("./models/ProjectGuid");
var guid = ProjectGuid_1.ProjectGuid.create("550e8400-e29b-41d4-a716-446655440000");
console.log(guid.toString()); // ✅ "550e8400-e29b-41d4-a716-446655440000"
// ✅ Auto-generates a valid GUID
var newGuid = ProjectGuid_1.ProjectGuid.generate();
console.log(newGuid.toString()); // Random UUID
// ✅ Comparison check
var anotherGuid = ProjectGuid_1.ProjectGuid.create("550e8400-e29b-41d4-a716-446655440000");
console.log(guid.equals(anotherGuid)); // ✅ true
// ❌ Invalid GUID should throw an error
try {
    ProjectGuid_1.ProjectGuid.create("invalid-guid");
}
catch (error) {
    console.error(error.message); // "Invalid GUID format: invalid-guid"
}
// ✅ FileName works the same way
var file = new FileName_1.FileName("valid_filename.txt");
console.log(file.toString()); // "valid_filename.txt"
// ❌ Invalid filename should throw an error
try {
    new FileName_1.FileName("invalid/file?.txt");
}
catch (error) {
    console.error(error.message); // "Filename contains invalid characters..."
}
