"use client";

// import { db } from "@/Utils/db";
import DeleteAction from "@/Utils/delete";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function DeleteButton({ commentId }) {
  const deleteComment = async () => {
    // console.log('comment deleted');
    DeleteAction(commentId);

    revalidatePath();
  };

  return (
    <button onClick={() => deleteComment()} className="text-red-500">
      Delete
    </button>
  );
}
