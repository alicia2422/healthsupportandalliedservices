import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import appSlice from "./slices/appSlice";
import userSlice2 from "./userSlice";
import navSlice from "./navSlice";
import scrollSlice from "./scrollSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    app: appSlice,
    nav: navSlice,
    scroll: scrollSlice,
    user2: userSlice2,
  },
});

export default store;
