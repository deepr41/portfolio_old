import navReducer from "../components/navSlice";

const rootReducers = {
  reducer: {
    navActive: navReducer,
  },
};

export default rootReducers;
