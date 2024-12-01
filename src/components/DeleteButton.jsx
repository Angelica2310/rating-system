"use client";

import DeleteAction from "@/Utils/delete-action";
import { useUser } from "@clerk/nextjs";

export default function DeleteButton({ clerkId, commentId }) {
  const { user } = useUser();
  const deleteComment = async () => {
    await DeleteAction(user.id, commentId);
    console.log(`Deleted comment with id ${commentId} for clerk_id ${user.id}`);
  };

  return (
    <button onClick={() => deleteComment()} className="text-red-500">
      Delete
    </button>
  );
}
