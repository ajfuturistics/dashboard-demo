import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  status: string;
}

const initialState: Array<Contact> = [];

export const userSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      return state.map((contact) => {
        if (action.payload.id === contact.id) {
          return action.payload;
        } else {
          return contact;
        }
      });
    },
    deleteContact: (state, action: PayloadAction<Contact>) => {
      return state.filter((contact) => contact.id !== action.payload.id);
    },
  },
});
export const { addContact, updateContact, deleteContact } = userSlice.actions;

export default userSlice.reducer;
