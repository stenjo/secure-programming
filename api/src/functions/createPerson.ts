import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { prisma } from "../prisma";
import { Name } from "../types/name";

type PersonInput = {
  title: string;
  firstName: string;
  lastName: string;
};

export async function createPerson(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  try {
    const { title, firstName, lastName } = await request.json() as PersonInput;
    const name = new Name(title, firstName, lastName);

    const person = await prisma.person.create({
      data: {
        title: name.title,
        firstName: name.first.toString(),
        lastName: name.last.toString(),
      },
    });

    return { status: 201, jsonBody: person };
  } catch (err) {
    return {
      status: 400,
      jsonBody: { error: (err as Error).message }
    };
  }
}

app.http("createPerson", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "persons",
  handler: createPerson,
});