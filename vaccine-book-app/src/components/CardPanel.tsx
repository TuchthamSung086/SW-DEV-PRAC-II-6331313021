"use client";
import { useReducer, useState } from "react";
import HospitalCard from "./HospitalCard";

export default function CardPanel() {
  const hospitals = [
    ["Chulalongkorn Hospital", "/img/chula.jpg"],
    ["Rajavithi Hospital", "/img/rajavithi.jpg"],
    ["Thammasat University Hospital", "/img/thammasat.jpg"],
  ];
  const initialRating = new Map();
  for (let index = 0; index < hospitals.length; index++) {
    initialRating.set(hospitals[index][0], 0);
  }

  function ratingReducer(
    currentRatings: Map<string, number>,
    action: { hospitalName: string; newRating: number }
  ) {
    currentRatings.set(action.hospitalName, action.newRating);
    console.log("UPDATED", currentRatings, action);

    return new Map(currentRatings);
  }

  const [rating, dispatchRating] = useReducer(ratingReducer, initialRating);

  return (
    <div>
      <div className="flex">
        {hospitals.map((hospital, index) => {
          return (
            <HospitalCard
              hospitalName={hospital[0]}
              imgSrc={hospital[1]}
              onRate={(hospitalName: string, rating: number) =>
                dispatchRating({
                  hospitalName: hospitalName,
                  newRating: rating,
                })
              }
            />
          );
        })}
      </div>
      <div className="flex flex-col">
        <div className="block w-[100%] ml-10">
          Rating List ({rating.size} hospitals)
        </div>
        <div className="block ml-20">
          <ul>
            {Array.from(rating).map((x) => {
              let [key, value] = x;
              if (!value) {
                value = 0;
              }
              return (
                <li>
                  - {key}: {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
