import Link from "next/link";
import Image from "next/image";
import { db } from "@/Utils/db";
import UpdateBrandRating from "@/components/UpdateRating";

export const metadata = {
  title: "All Brand Information",
  description: "Where to get information about brands",
};

export default async function Page() {
  const result = await db.query(`SELECT 
brand.name as brand_name,
brand.img,
brand.id,
rating.rating
FROM brand
JOIN rating ON rating.brand_id = brand.id ORDER BY brand.id`);
  const brands = result.rows;

  // console.log("brands:", brands);

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-extrabold p-10 mb-5">Rate your favorite !!</p>

      <div className="grid grid-cols-5 grid-rows-1 w-4/5 gap-x-10">
        {brands.map((brand) => {
          return (
            <div key={brand.id} className="flex justify-center flex-col">
              <Link href={`brand/${brand.id}`}>
                <Image
                  src={brand.img}
                  alt=""
                  width={600}
                  height={600}
                  className="hover:cursor-pointer"
                />
              </Link>
              <UpdateBrandRating brand_id={brand.id} rating={brand.rating} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
