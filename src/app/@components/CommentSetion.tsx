

import { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && message) {
      const newComment: Comment = {
        id: comments.length + 1,
        name: name,
        message: message,
        date: new Date().toLocaleDateString(),
      };

      setComments([...comments, newComment]);
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Comments</h2>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>

      {/* Comment list */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-600">{comment.name}</p>
            <p className="text-sm text-gray-600">{comment.date}</p>
            <p className="mt-2 text-gray-800">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 'use client'
// import { useState } from "react";

// interface Comment {
//   name: string;
//   content: string;
// }

// const CommentSection = () => {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [name, setName] = useState("");
//   const [content, setContent] = useState("");

//   const handleAddComment = () => {
//     if (name && content) {
//       const newComment = { name, content };
//       setComments([...comments, newComment]);  // Add the new comment to the state
//       setName("");  // Clear the input fields
//       setContent("");
//     }
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      
//       {/* Input Fields for Name and Comment */}
//       <div className="mb-4">
//         <input
//           className="border p-2 w-full mb-2"
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <textarea
//           className="border p-2 w-full"
//           placeholder="Your Comment"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <button
//           onClick={handleAddComment}
//           className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
//         >
//           Add Comment
//         </button>
//       </div>

//       {/* Render Comments */}
//       <div>
//         {comments.length > 0 ? (
//           comments.map((comment, index) => (
//             <div key={index} className="border-b border-gray-200 py-4">
//               <p className="font-bold">{comment.name}</p>
//               <p>{comment.content}</p>
//             </div>
//           ))
//         ) : (
//           <p>No comments yet. Be the first to comment!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommentSection;