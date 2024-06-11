import type { LowSync } from "lowdb";
import { JSONFileSyncPreset } from "lowdb/node";

interface QuestionItem {
  text: string;
}

const lowDb: LowSync<{ question: QuestionItem[] }> = JSONFileSyncPreset<{ question: QuestionItem[] }>("db.json", {
  question: [{ text: "Buy milk" }, { text: "Buy strawberries" }],
});

export { lowDb };
export type { QuestionItem };