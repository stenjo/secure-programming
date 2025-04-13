import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { prisma } from "../prisma";
import { Name } from "../types/name";

type PersonInput = {
  title: string;
  firstName: string;
  lastName: string;
};
export async function updatePerson(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const id = request.params.id;
  const { title, firstName, lastName } = await request.json() as PersonInput;

  try {
    const name = new Name(title, firstName, lastName);

    const updated = await prisma.person.update({
      where: { id },
      data: {
        title: name.title,
        firstName: name.first.toString(),
        lastName: name.last.toString(),
      },
    });

    return { status: 200, jsonBody: updated };
  } catch (err) {
    return { status: 400, jsonBody: { error: (err as Error).message } };
  }
}

app.http("updatePerson", {
  methods: ["PUT"],
  authLevel: "anonymous",
  route: "persons/{id}",
  handler: updatePerson,
});