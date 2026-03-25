import React, { useContext, useState } from "react";
import ChevronDown from "../Icons/ChevronDown";
import ChevronUp from "../Icons/ChevronUp";
import { ThemeContext } from "../Store/ThemeProvider";

const Rating = ({ reviews = [] }) => {
  const {theme} = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={`mt-16 ${theme === "dark" ? "text-white" : "text-black"}`}>
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <ReviewAccordian
            key={index}
            review={review}
            index={index}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;

const ReviewAccordian = ({
  review,
  index,
  setActiveIndex,
  activeIndex,
  theme,
}) => {
  const { reviewerName, rating, comment } = review;
  const isActive = activeIndex === index;

  return (
    <div
      className={`border rounded-lg p-4 ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-50"
      }`}
    >
      <div
        onClick={() => setActiveIndex(isActive ? null : index)}
        className="flex justify-between cursor-pointer"
      >
        <div className="flex">
          <h4 className="font-semibold pr-5">{reviewerName}</h4>
          <span className="text-yellow-500">⭐ {rating}</span>
        </div>
        {isActive ? <ChevronUp /> : <ChevronDown />}
      </div>

      {isActive && (
        <p
          className={`mt-2 ${
            theme === "dark" ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {comment}
        </p>
      )}
    </div>
  );
};