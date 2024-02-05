import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/UserSlice";
import movieReducer from "../feature/movie/MovieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  
});
