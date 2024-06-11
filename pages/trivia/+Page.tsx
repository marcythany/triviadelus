import type { Data } from "./+data";
import React from "react";
import { useData } from "vike-react/useData";
import { QuestionList } from "./Questions.jsx";

export default function Page() {
  const data = useData<Data>();
  return (
    <>
      <h1>To-do List</h1>
      <QuestionList initialQuestionItems={data.question} />
    </>
  );
}
