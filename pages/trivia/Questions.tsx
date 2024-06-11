import React, { useState } from "react";

export function QuestionList({
  initialQuestionItems,
}: {
  initialQuestionItems: { text: string }[];
}) {
  const [questionItems, setQuestionItems] = useState(initialQuestionItems);
  const [newQuestion, setNewQuestion] = useState("");
  return (
    <>
      <ul>
        {questionItems.map((questionItem) => (
          <li key={questionItem.text}>{questionItem.text}</li>
        ))}
      </ul>
      <div>
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();

            // Optimistic UI update
            setQuestionItems((prev) => [...prev, { text: newQuestion }]);
            try {
              const response = await fetch("/api/trivia/create", {
                method: "POST",
                body: JSON.stringify({ text: newQuestion }),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              await response.blob();
              setNewQuestion("");
            } catch (e) {
              console.error(e);
              // rollback
              setQuestionItems((prev) => prev.slice(0, -1));
            }
          }}
        >
          <input
            type="text"
            onChange={(ev) => setNewQuestion(ev.target.value)}
            value={newQuestion}
          />{" "}
          <button type="submit">Add to-do</button>
        </form>
      </div>
    </>
  );
}
