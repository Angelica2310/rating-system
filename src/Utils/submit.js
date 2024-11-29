"use server";
import { db } from "./db";

export async function handleComment(formData) {
  const name = formData.get("name");
  const comment = formData.get("comment");

  const result = await db.query(
    `INSERT INTO comment(name, comment) VALUES($1,$2) RETURNING id, name, comment, brand_id`,
    [name, comment]
  );

  return result.rows[0]; // return the new comment
}
