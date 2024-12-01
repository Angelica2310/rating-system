"use server";
import { db } from "@/Utils/db";
import { revalidatePath } from "next/cache";

export default async function RateAction(rating, brand_id) {
  const data = await db.query(
    `UPDATE rating SET rating = $1 WHERE brand_id = $2 RETURNING rating`,
    [rating, brand_id]
  );
  // console.log(data);
  revalidatePath("/");
  return data.rows[0].rating;
}
