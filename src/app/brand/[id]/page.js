import { db } from "@/Utils/db";
import Image from "next/image";
// import CommentForm from "@/components/CommentForm";

export default async function SingleBrandPage({ params }) {
  const id = (await params).id;

  const brand = (await db.query(`SELECT * FROM brand WHERE id =${id}`)).rows[0];

  const comments = (
    await db.query(`SELECT * FROM comment WHERE brand_id =${id}`)
  ).rows;

  //   async function handleComment(formData) {
  //     "use server";

  //     const name = formData.get("name");
  //     const comment = formData.get("comment");

  //     await db.query(`INSERT INTO comment(name, comment) VALUES($1,$2)`, [
  //       name,
  //       comment,
  //     ]);
  //   }

  return (
    <div className="flex flex-col items-center">
      <Image
        src={brand.img}
        alt=""
        width={200}
        height={200}
        className="mt-20"
      />
      <p className="mt-5 w-3/5 text-xl text-justify">{brand.intro} </p>
      {comments.map((comment) => {
        return (
          <p className="m-20 bg-cream w-3/5 pl-2" key={comment.id}>
            <strong>{comment.name}</strong>: {comment.comment}
          </p>
        );
      })}

      {/* <CommentForm /> */}
      {/* <form action={handleComment}>
        <h2>This is a form page</h2>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="comment">Comment</label>
        <input id="comment" name="comment" type="text" />

        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}
