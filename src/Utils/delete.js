"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";

export default async function DeleteAction(commentId) {
  //   console.log("commentId", commentId, typeof commentId);
  const data = (await db.query(`DELETE from comment where id=$1`, [commentId]))
    .json;
  console.log(data);

  revalidatePath("/brand");
}
