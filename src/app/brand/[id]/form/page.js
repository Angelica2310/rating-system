import { db } from "@/Utils/db";
import { redirect } from "next/navigation";

export default function FormPage() {
  async function handleComment(formData) {
    "use server";

    const name = formData.get("name");
    const comment = formData.get("comment");

    await db.query(`INSERT INTO comment(name, comment) VALUES($1,$2)`, [
      name,
      comment,
    ]);
  }

  return (
    <div>
      <form action={handleComment}>
        <h2>This is a form page</h2>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="comment">Comment</label>
        <input id="comment" name="comment" type="text" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
