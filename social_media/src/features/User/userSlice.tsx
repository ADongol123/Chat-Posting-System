import { createSlice } from "@reduxjs/toolkit"


export type UserInterface = {
  name: string,
  email: string,
  photo: string,
  loggedIn: boolean
}

const initialState = {
  name: '',
  email: '',
  photo: '',
  loggedIn: false
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.loggedIn = action.payload.loggedIn;
    },
    setUserLogout: (state: any) => {
      state.name = null;
      state.email = null;
      state.photo = null;
      state.loggedIn = false
    }
  }
})

export const { setUserLogin, setUserLogout } = userSlice.actions;

export const selectUserName = (state: any) => state.user.name;
export const selectUserEmail = (state: any) => state.user.email;
export const selectUserPhoto = (state: any) => state.user.photo;
export const selectUserloggedIn = (state: any) => state.user.loggedIn;

export default userSlice.reducer;