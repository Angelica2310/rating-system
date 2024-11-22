import { db } from "@/Utils/db";
import Image from "next/image";

export default async function SingleBrandPage({ params }) {
  const id = (await params).id;

  const brand = (await db.query(`SELECT * FROM brand WHERE id =${id}`)).rows[0];

  //   console.log(brand);

  const comment = (
    await db.query(`SELECT * FROM comment WHERE brand_id =${id}`)
  ).rows[0];

  console.log(comment);

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

      <p className="m-20 bg-cream w-3/5 pl-2">
        {comment.name}: {comment.comment}
      </p>
    </div>
  );
}
