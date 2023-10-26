"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../interfaces";
import { addBooking } from "@/redux/features/bookSlice";
import React, { ChangeEvent, FormEvent, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { json } from "stream/consumers";

function BookingFormText({
  title,
  id,
  placeholder,
}: {
  title: string;
  id: string;
  placeholder: string;
}) {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>

      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            type="text"
            name={id}
            id={id}
            autoComplete={id}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}

function BookingFormSelect({
  title,
  id,
  placeholder,
  choices,
}: {
  title: string;
  id: string;
  placeholder: string;
  choices: string[];
}) {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="mt-2">
        <select
          id={id}
          name={id}
          placeholder="--select--"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="" disabled selected>
            -- Select --
          </option>
          {choices.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function BookingFormDate({
  dateValue,
  setDateValue,
}: {
  dateValue: dayjs.Dayjs | null;
  setDateValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>;
}) {
  return (
    <div className="sm:col-span-3 block">
      <label
        htmlFor="date"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Choose date
      </label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={dateValue}
          onChange={(newValue) => setDateValue(newValue)}
        />
      </LocalizationProvider>
    </div>
  );
}

export default function BookingForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17")
  );

  const bookVaccine = (
    firstName: string,
    lastName: string,
    ID: string,
    hospital: string,
    date: string
  ) => {
    const item: BookingItem = {
      firstName: firstName,
      lastName: lastName,
      hospital: hospital,
      date: date,
      SSN: ID,
    };
    dispatch(addBooking(item));
  };

  const getFieldById = (id: string) => {
    return (document.getElementById(id) as HTMLInputElement)?.value;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let date = "";
    if (dateValue) {
      date = dateValue.toString();
    }
    const item: BookingItem = {
      firstName: getFieldById("firstName"),
      lastName: getFieldById("lastName"),
      SSN: getFieldById("id"),
      hospital: getFieldById("hospital"),
      date: date,
    };
    dispatch(addBooking(item));
    alert("Form submitted with details: " + JSON.stringify(item));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 content-center text-center">
            Book your vaccine
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 content-center text-center">
            Please fill the form below
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ml-80">
            <BookingFormText
              title="First name"
              id="firstName"
              placeholder="First name"
            />
            <BookingFormText
              title="Last name"
              id="lastName"
              placeholder="Last name"
            />
            <BookingFormText
              title="ID number / Social Security number (13 digits)"
              id="id"
              placeholder="1101234567890"
            />
            <BookingFormSelect
              title="Hospital"
              id="hospital"
              placeholder="Hospital"
              choices={[
                "Chulalongkorn Hospital", // TODO: change this to connect to backend some day
                "Rajavithi Hospital",
                "Thammasat University Hospital",
              ]}
            ></BookingFormSelect>
            <BookingFormDate
              dateValue={dateValue}
              setDateValue={setDateValue}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
