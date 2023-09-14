"use client";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function HospitalCard({
  imgSrc,
  hospitalName,
  onRate,
}: {
  imgSrc: string;
  hospitalName: string;
  onRate: Function;
}) {
  const [value, setValue] = useState<number | null>(0);
  return (
    <InteractiveCard>
      <div className="w-full h-32 relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="object-cover rounded-t-lg h-[70%]"
        ></Image>
      </div>
      <div className="w-full h-20 p-[10px]">{hospitalName}</div>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            onRate(hospitalName, newValue);
          }}
        />
      </Box>
    </InteractiveCard>
  );
}
