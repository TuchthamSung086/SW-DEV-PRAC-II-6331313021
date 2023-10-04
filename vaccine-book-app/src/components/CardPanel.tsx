"use client";
import { useReducer, useState } from "react";
import HospitalCard from "./HospitalCard";
import Link from "next/link";

export default function CardPanel() {
  /*
  Mock Data for Demonstration Only
  */
  const mockHospital = [
    { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      image: "/img/thammasat.jpg",
    },
  ];
  const initialRating = new Map();
  mockHospital.forEach((hospital) => {
    initialRating.set(hospital.name, 0);
  });

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
        {mockHospital.map((hospital) => {
          return (
            <Link href={`hospital/${hospital.hid}`} className="w-1/5">
              <HospitalCard
                hospitalName={hospital.name}
                imgSrc={hospital.image}
                onRate={(hospitalName: string, rating: number) =>
                  dispatchRating({
                    hospitalName: hospitalName,
                    newRating: rating,
                  })
                }
              />
            </Link>
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
