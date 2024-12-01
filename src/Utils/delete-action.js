"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export default async function DeleteAction(clerkId, commentId) {
  const { userId } = await auth(); // build-in in clerk to get the userID

  //   console.log("commentId", commentId, typeof commentId);
  await db.query(`DELETE from comment where clerk_id=$1 AND id = $2`, [
    userId,
    commentId,
  ]);

  revalidatePath("/brand");
}
