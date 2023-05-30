import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAlarms } from "./features/reloj/relojSlice";
import { setSetAlarmToLocalStorage } from "./utilities/setAlarmToLocalStorage";

export default function SetAlarm({ relojState }) {
  let [dataAlarm, setDataAlarm] = useState({});

  let dispatch = useDispatch();
  return (
    <>
      <h3>Set alarm:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setAlarms(dataAlarm));
          setSetAlarmToLocalStorage(dataAlarm);
        }}
      >
        <input
          type="number"
          placeholder="hour"
          onChange={(e) => {
            setDataAlarm({
              ...dataAlarm,
              stoped: false,
              hour: parseInt(e.target.value, 10)
            });
          }}
          defaultValue={relojState.hour}
        />
        <input
          type="number"
          placeholder="minutes"
          onChange={(e) => {
            setDataAlarm({
              ...dataAlarm,
              minute: parseInt(e.target.value, 10)
            });
          }}
          defaultValue={relojState.minutes}
        />

        <input type="submit" value="set" />
      </form>
    </>
  );
}
