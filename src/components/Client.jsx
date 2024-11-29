// "use client";
// import { handleComment } from "@/Utils/submit";
// import ServerComponent from "./server";
// import { useState } from "react";

// export default function ClientComponent({ onNewComment }) {
//   const [formData, setFormData] = useState({ name: "", comment: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);

//   //   try {
//   //     // Use server action
//   //     const newComment = await handleComment(new FormData(e.target));

//   //     // Update the parent component with the new comment
//   //     onNewComment(newComment);

//   //     // Clear the form
//   //     setFormData({ name: "", comment: "" });
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your name"
//           value={formData.name}
//           onChange={(e) =>
//             setFormData((prev) => ({ ...prev, name: e.target.value }))
//           }
//           required
//           className="border p-2 w-full"
//         />
//         <textarea
//           name="comment"
//           placeholder="Your comment"
//           value={formData.comment}
//           onChange={(e) =>
//             setFormData((prev) => ({ ...prev, comment: e.target.value }))
//           }
//           required
//           className="border p-2 w-full"
//         />
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="bg-blue-500 text-white px-4 py-2"
//         >
//           {isSubmitting ? "Adding..." : "Add Comment"}
//         </button>
//       </form>
//       <ServerComponent />
//     </div>
//   );
// }
