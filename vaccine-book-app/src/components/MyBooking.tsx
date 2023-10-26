"use client";
import { useAppSelector } from "@/redux/store";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../interfaces";

export default function MyBooking() {
  const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
  console.log(JSON.stringify(bookItems));

  const dispatch = useDispatch<AppDispatch>();
  const cancelBooking = (item: BookingItem) => {
    dispatch(removeBooking(item));
    alert("Cancelling your booking...");
  };

  return (
    <>
      {bookItems.map((bookItem) => (
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 mt-24">
          <div className="text-xl">Hospital: {bookItem.hospital}</div>
          <div className="text-sm">Date: {bookItem.date}</div>
          <div className="text-md">
            Booker: {bookItem.firstName} {bookItem.lastName}
          </div>
          <div className="text-sm">SSN: {bookItem.SSN}</div>
          <button
            onClick={() => cancelBooking(bookItem)}
            className="bg-red-500 h-10 mt-2 hover:bg-red-700 p-3 font-extrabold rounded hover:text-white"
          >
            CANCEL
          </button>
        </div>
      ))}
      {(bookItems.length==0) && (<div className="mt-20 text-center font-bold">No Vaccine Booking</div>)}
    </>
  );
}
