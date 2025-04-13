import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { prisma } from "../prisma";

export async function getPeople(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const people = await prisma.person.findMany();
  return {
    status: 200,
    jsonBody: people
  };
}

app.http("getPeople", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "persons",
  handler: getPeople,
});