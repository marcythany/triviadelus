import { lowDb } from "../database/questionItems";

export async function createQuestionHandler<
  Context extends Record<string | number | symbol, unknown>,
>(request: Request, _context?: Context): Promise<Response> {
  // In a real case, user-provided data should ALWAYS be validated with tools like zod
  const newQuestion = (await request.json()) as { text: string };

  await lowDb.update(({ question }) => question.push({ text: newQuestion.text }));

  return new Response(JSON.stringify({ status: "OK" }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
