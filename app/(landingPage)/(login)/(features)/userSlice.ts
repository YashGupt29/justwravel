import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

const initialState: User = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
