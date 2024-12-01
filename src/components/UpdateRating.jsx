"use client";

import RateAction from "@/Utils/update-rating";
import { useState } from "react";

export default function UpdateBrandRating({ rating, brand_id }) {
  const [change, setChange] = useState(rating);
  const [loading, setLoading] = useState(false);

  async function handleRatingChange() {
    setLoading(true);

    // console.log("Change+1:", change + 1);
    // console.log("brand_id:", brand_id);

    try {
      const updatedRating = await RateAction(change + 1, brand_id);
      if (updatedRating != null) {
        setChange(updatedRating);
      } else {
        console.log("Rating is not valid");
      }
    } catch (error) {
      console.log("Failed to rate:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <button
        onClick={handleRatingChange}
        disabled={loading}
        className="border rounded-xl w-12 m-5"
      >
        {loading ? "Loading..." : "Rate"}
      </button>
    </div>
  );
}
