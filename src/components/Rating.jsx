import React from "react";
import { TbGrillSpatula } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarBorder } from "react-icons/md";

// Turns a rating (0-5, may be a string or decimal) into a number of filled icons.
const filledCount = (value) => {
  const n = Math.round(Number(value) || 0);
  return Math.min(Math.max(n, 0), 5);
};

// Same markup as the old hard-coded spatulas: unfilled ones get the "fade" class.
export const SpatulaRating = ({ value }) => {
  const filled = filledCount(value);
  return (
    <span className="spatula" title={`${Number(value) || 0} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) =>
        n <= filled ? (
          <TbGrillSpatula key={n} />
        ) : (
          <TbGrillSpatula key={n} className="fade" />
        )
      )}
    </span>
  );
};

// Same icons as the old hard-coded stars (FaStar / MdOutlineStarBorder).
export const StarRating = ({ value }) => {
  const filled = filledCount(value);
  return (
    <>
      {[1, 2, 3, 4, 5].map((n) =>
        n <= filled ? <FaStar key={n} /> : <MdOutlineStarBorder key={n} />
      )}
    </>
  );
};

// Average of the reviews' "rate" values, ignoring reviews with no rating.
export const averageRate = (reviews) => {
  const rated = (reviews || []).filter((r) => Number(r.rate) > 0);
  if (!rated.length) return 0;
  return rated.reduce((sum, r) => sum + Number(r.rate), 0) / rated.length;
};
