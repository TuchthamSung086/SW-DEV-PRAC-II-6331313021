import { BookingItem } from "./../../../interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      // User can only book once, if they book again, it will replace their current booking
      console.log("Previous bookItems: " + JSON.stringify(state.bookItems));
      // If any booking item has their SSN, remove it first
      const remainItems = state.bookItems.filter((obj) => {
        return obj.SSN !== action.payload.SSN; // Get all booking from other users (different SSN)
      });
      state.bookItems = remainItems;

      // Then add the new details back for replacement
      state.bookItems.push(action.payload);
      console.log("Current bookItems: " + JSON.stringify(state.bookItems));
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      // Get all that does not exactly match the item

      // Note: Didn't include date because I'm not sure if all dates would be in the same format for string comparison logic
      const remainItems = state.bookItems.filter((obj) => {
        return (
          obj.SSN !== action.payload.SSN ||
          obj.firstName !== action.payload.firstName ||
          obj.lastName !== action.payload.lastName ||
          obj.hospital !== action.payload.hospital
        );
      });
      state.bookItems = remainItems;
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
