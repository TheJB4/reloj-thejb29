import { createSlice } from "@reduxjs/toolkit";
import { setGetAlarmToLocalStorage } from "../../utilities/setAlarmToLocalStorage";

const initialState = {
  hour: 0,
  minutes: 0,
  seconds: 0,
  alarms: setGetAlarmToLocalStorage()
};

export const relojSlice = createSlice({
  name: "reloj",
  initialState,
  reducers: {
    setHourInitial: (state, action) => {
      state.hour = action.payload;
    },
    setMinutesInitial: (state, action) => {
      state.minutes = action.payload;
    },
    setSecondsInitial: (state, action) => {
      state.seconds = action.payload;
    },
    incrementSeconds: (state) => {
      state.seconds += 1;
    },
    setAlarms: (state, action) => {
      state.alarms = [...state.alarms, action.payload];
      //console.log(state.alarms);
    },
    deleteAlarm: (state, action) => {
      console.log(action.payload);
      //let newAlarms = state.alarms.filter((alarm) => console.log(alarm));
    }
  }
});

export const {
  setHourInitial,
  setMinutesInitial,
  setSecondsInitial,
  incrementSeconds,
  setAlarms,
  deleteAlarm
} = relojSlice.actions;

export default relojSlice.reducer;
