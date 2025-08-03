import React, { useState } from "react";

// Mock comment data
const commentsData = [
  {
    id: 1,
    author: "Alice",
    text: "This is a great project!",
    replies: [
      {
        id: 2,
        author: "Bob",
        text: "I agree with you.",
        replies: [
          {
            id: 3,
            author: "Charlie",
            text: "Me too!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    author: "Diana",
    text: "Thanks for sharing this!",
    replies: [],
  },
];

// Reusable Comment Component
function Comment({ comment }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="mb-4 border-l-2 border-gray-200 pl-4">
      <div className="bg-gray-50 p-3 rounded shadow-sm">
        <p className="font-semibold text-gray-800">{comment.author}</p>
        <p className="text-gray-700">{comment.text}</p>

        {comment.replies.length > 0 && (
          <button
            className="text-sm text-blue-600 mt-2 hover:underline"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies
              ? "Hide replies"
              : `View ${comment.replies.length} repl${
                  comment.replies.length > 1 ? "ies" : "y"
                }`}
          </button>
        )}
      </div>

      {showReplies &&
        comment.replies.map((reply) => (
          <div key={reply.id} className="mt-4 ml-4">
            <Comment comment={reply} />
          </div>
        ))}
    </div>
  );
}

// Main Nested Comment Component
export default function NestedComment() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow p-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Nested Comments</h2>

      {commentsData.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
