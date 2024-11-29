import { db } from "@/Utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import React from "react";
import * as Form from "@radix-ui/react-form";

export default async function PostForm({ id }) {
  const { userId } = await auth();

  async function handleSubmit(formData) {
    "use server";
    const comment = formData.get("comment");

    // console.log(comment);

    db.query(
      `INSERT INTO comment(comment, clerk_id, brand_id) VALUES ($1, $2, $3)`,
      [comment, userId, id]
    );
    revalidatePath("/brand");
  }
  return (
    <Form.Root className="w-[260px]" action={handleSubmit}>
      <Form.Field className="mb-2.5 grid" name="comment">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-blue">
            Comment
          </Form.Label>
          <Form.Message
            className="text-[13px] text-blue opacity-80"
            match="valueMissing"
          >
            Please enter a comment
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] leading-none text-blue shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blue selection:text-white hover:shadow-[0_0_0_1px_#3581b8] focus:shadow-[0_0_0_2px_#3581b8]"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Post
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
