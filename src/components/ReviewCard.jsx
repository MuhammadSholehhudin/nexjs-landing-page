import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ customerName, imgURL, feedback, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="mt-6 max-w-sm text-center info-text border border-red-500">
        {feedback}
      </p>
      <div className="mt-3 flex gap-2.5 justify-center items-center">
        <img
          src={star}
          alt="rating"
          className="object-contain m-0"
          width={24}
          height={24}
        />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
