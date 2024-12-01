import { db } from "@/Utils/db";
import BrandPage from "./brand/page";
import BarChart from "@/components/BarChart";

export const metadata = {
  title: "Rating System | Home",
  description: "Rating System Home Page",
};

export default async function page() {
  let brands = [];

  try {
    // Fetch brands from the database
    const result = await db.query(`SELECT id, name FROM brand`);
    brands = result.rows;
  } catch (error) {
    console.error("Error fetching brands:", error);
  }

  const result = (
    await db.query(`SELECT 
brand.name as brand_name,
rating.rating
FROM brand
JOIN rating ON rating.brand_id = brand.id ORDER BY brand.id`)
  ).rows;

  // console.log(result);
  return (
    <div>
      <div>
        <BarChart data={result} />
      </div>
      <BrandPage />
    </div>
  );
}
