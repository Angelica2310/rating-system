import { db } from "@/Utils/db";

export default async function CommentList() {
  const id = (await params).id;

  const comments = (
    await db.query(`SELECT * FROM comment WHERE brand_id =${id}`)
  ).rows;
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="m-20 bg-cream w-3/5 pl-2" key={comment.id}>
            <strong>{comment.name}</strong>: {comment.comment}
          </div>
        );
      })}
    </div>
  );
}
