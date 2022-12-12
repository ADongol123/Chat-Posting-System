import { createSlice } from "@reduxjs/toolkit"


export type UserInterface = {
  id:string,
  name: string,
  email: string,
  photo: string,
  token: string,
  loggedIn: boolean
}

const initialState = {
  id:'',
  name: '',
  email: '',
  photo: '',
  token: '',
  loggedIn: false
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.token = action.payload.token;
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
export const selectUserId = (state: any) => state.user.id;
export const selectUserName = (state: any) => state.user.name;
export const selectUserEmail = (state: any) => state.user.email;
export const selectUserPhoto = (state: any) => state.user.photo;
export const selectUserloggedIn = (state: any) => state.user.loggedIn;
export const selectUserToken = (state:any) => state.user.Token
export default userSlice.reducer;