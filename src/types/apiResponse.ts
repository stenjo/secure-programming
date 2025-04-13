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

import { Name } from "./name";
import { Guid } from "./guid";

class Login {
	uuid: Guid;

	constructor(uuid: string) {
		this.uuid = new Guid(uuid);
	}
}

class User {
	login: Login;
	name: Name;
	email: string;

	constructor(login: Login, name: Name, email: string) {
		this.login = login;
		this.name = name;
		this.email = email;
	}
}

class Info {
	seed: string;
	results: number;
	page: number;
	version: string;

	constructor(seed: string, results: number, page: number, version: string) {
		this.seed = seed;
		this.results = results;
		this.page = page;
		this.version = version;
	}
}

class ApiResponse {
	results: User[];
	info: Info;

	constructor(results: User[], info: Info) {
		this.results = results;
		this.info = info;
	}
}

// Example usage
// const exampleLogin = new Login("c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c");
// const exampleName = new Name("John", "Doe");
// const exampleUser = new User(exampleLogin, exampleName, "john.doe@example.com");
// const exampleInfo = new Info("abc", 1, 1, "1.3");
// const exampleApiResponse = new ApiResponse([exampleUser], exampleInfo);

// console.log(exampleApiResponse);

export { Login, Name, User, Info, ApiResponse };
