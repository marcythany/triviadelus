// https://vike.dev/data
import { lowDb } from "../../database/questionItems";

export type Data = {
  question: { text: string }[];
};

export default async function data(): Promise<Data> {
  lowDb.read();
  return lowDb.data;
}
