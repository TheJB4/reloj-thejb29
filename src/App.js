import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  setHourInitial,
  setMinutesInitial,
  setSecondsInitial
} from "./features/reloj/relojSlice";

import SetAlarm from "./SetAlarm";

/*Custom Hooks*/
import { useActuallyDate } from "./utilities/useActuallyDate";

export default function App() {
  let relojState = useSelector((state) => state.relojState);
  let actuallyDate = useActuallyDate();

  let dispatch = useDispatch();

  let [secondsCounter, setSecondsCounter] = useState(actuallyDate.seconds);
  let [viewAlarm, setViewAlarm] = useState(false);
  let [soundAlarm, setSoundAlarm] = useState(false);

  let [actuallyAlarm, setActuallyAlarm] = useState(null);
  useEffect(() => {
    let interval = setInterval(() => {
      setSecondsCounter((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    //console.log(secondsCounter);
    if (secondsCounter === 60) {
      setSecondsCounter(0);
    }
    dispatch(setHourInitial(actuallyDate.hour));
    dispatch(setMinutesInitial(actuallyDate.minutes));
    dispatch(setSecondsInitial(secondsCounter));

    //Logic to appear sound alarm;
    //console.log(myAlarms);

    let alarm = relojState.alarms?.find((myalarm) => {
      if (
        relojState.hour === myalarm.hour &&
        relojState.minutes === myalarm.minute
      ) {
        return myalarm;
      }
      return undefined;
    });

    //console.log(alarm);
    if (alarm && alarm.stoped === false) {
      console.log("ES LA HORAAAAAAAAAAAAAAAAAAAAAAAAA");
      setSoundAlarm(true);
      setActuallyAlarm(alarm);
      //dispatch(deleteAlarm(alarm));
    }
  }, [secondsCounter]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2 className="bg-gray-700">
        {`${relojState.hour}:${relojState.minutes}:${
          relojState.seconds < 10
            ? `0${relojState.seconds}`
            : `${relojState.seconds}`
        }`}
      </h2>

      <button onClick={() => setViewAlarm(true)}>Set alarm!!</button>
      {viewAlarm && <SetAlarm relojState={relojState} />}
      {soundAlarm && (
        <StartAlarm setSoundAlarm={setSoundAlarm} alarm={actuallyAlarm} />
      )}
    </div>
  );
}
