import { db } from "@/Utils/db";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "All Brand Information",
  description: "Where to get information about brands",
};

export default async function BrandPage() {
  const result = await db.query(`SELECT * FROM brand`);
  const brands = result.rows;

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
              {/* <p className="font-black text-brown mt-10">{brand.name}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
