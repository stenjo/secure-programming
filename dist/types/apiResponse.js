"use strict";
// {
//   "results": [
//     {
//       "login": {
//         "uuid": "c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c"
//       },
//       "name": {
//         "first": "John",
//         "last": "Doe"
//       },
//       "email": "john.doe@example.com"
//     }
//   ],
//   "info": {
//     "seed": "abc",
//     "results": 1,
//     "page": 1,
//     "version": "1.3"
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = exports.Info = exports.User = exports.Name = exports.Login = void 0;
const name_1 = require("./name");
Object.defineProperty(exports, "Name", { enumerable: true, get: function () { return name_1.Name; } });
const guid_1 = require("./guid");
class Login {
    uuid;
    constructor(uuid) {
        this.uuid = new guid_1.Guid(uuid);
    }
}
exports.Login = Login;
class User {
    login;
    name;
    email;
    constructor(login, name, email) {
        this.login = login;
        this.name = name;
        this.email = email;
    }
}
exports.User = User;
class Info {
    seed;
    results;
    page;
    version;
    constructor(seed, results, page, version) {
        this.seed = seed;
        this.results = results;
        this.page = page;
        this.version = version;
    }
}
exports.Info = Info;
class ApiResponse {
    results;
    info;
    constructor(results, info) {
        this.results = results;
        this.info = info;
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=apiResponse.js.map