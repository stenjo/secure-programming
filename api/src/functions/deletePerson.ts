import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { prisma } from "../prisma";

export async function deletePerson(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const id = request.params.id;

  try {
    await prisma.person.delete({ where: { id } });
    return { status: 204 };
  } catch (err) {
    return { status: 404, jsonBody: { error: (err as Error).message } };
  }
}

app.http("deletePerson", {
  methods: ["DELETE"],
  authLevel: "anonymous",
  route: "persons/{id}",
  handler: deletePerson,
});