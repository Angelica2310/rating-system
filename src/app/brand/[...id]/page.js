import BackButton from "@/components/BackButton";
import DeleteButton from "@/components/DeleteButton";
import PostForm from "@/components/PostForm";
import UserForm from "@/components/UserForm";
import { db } from "@/Utils/db";
import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = (await params).id;

  const brand = (await db.query(`SELECT * FROM brand WHERE id = ${id}`))
    .rows[0];

  return {
    title: `${brand.name} | Details`,
    description: `Learn more about ${brand.name}`,
  };
}

export default async function SingleBrandPage({ params }) {
  const { userId } = await auth(); // build-in in clerk to get the userID

  // const id = (await params).id;
  // console.log("Brand ID:", id, "Type", typeof id);

  // Parse `id` and ensure it's an integer
  let id = (await params).id;
  if (typeof id === "string" && id.startsWith("{") && id.endsWith("}")) {
    id = JSON.parse(id)[0];
  }
  id = parseInt(id, 10);
  // console.log("Brand ID:", id, "Type:", typeof id);

  const brand = (await db.query(`SELECT * FROM brand WHERE id =${id}`)).rows[0];

  const comments = (
    await db.query(`SELECT 
comment.id,
comment.comment,
users.username,
users.id as user_id
FROM comment
JOIN users ON comment.clerk_id = users.clerk_id WHERE brand_id=${id}`)
  ).rows;

  const responseUser = await db.query(
    `SELECT * FROM users WHERE clerk_id='${userId}'`
  );

  // console.log("response user:", responseUser);
  const numUser = responseUser.rowCount; // rowCount: number of active user, can only be 0 or 1

  return (
    <div className="flex flex-col items-center">
      <BackButton />
      <Image src={brand.img} alt="" width={200} height={200} />

      <p className="m-5 w-3/5 text-l text-justify">{brand.intro} </p>

      <div className="m-0.5 bg-cream w-3/5 pl-2 pr-2 rounded-xl divide-solid divide-y">
        {comments.map((comment) => (
          <p
            key={comment.id}
            className="flex items-center justify-between relative"
          >
            <span>
              <span className="text-brown">{comment.username}</span>:{" "}
              {comment.comment}
            </span>
            <DeleteButton commentId={comment.id} />
          </p>
        ))}
      </div>
      <SignedIn>{numUser === 1 ? <PostForm id={id} /> : <UserForm />}</SignedIn>

      <SignedOut>
        <p className="p-5 text-red-600">
          Please{" "}
          <SignInButton>
            <button className="text-blue hover:underline hover:decoration-solid">
              Sign in
            </button>
          </SignInButton>
          to post a comment
        </p>
      </SignedOut>
    </div>
  );
}
