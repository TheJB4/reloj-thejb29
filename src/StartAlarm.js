import { stopedAlarm } from "./utilities/setAlarmToLocalStorage";

export default function StartAlarm({ setSoundAlarm, alarm }) {
  return (
    <>
      <h1>Es la horaa papa!!!!!!</h1>
      <button
        onClick={() => {
          setSoundAlarm(false);
          stopedAlarm(alarm);
          window.location.reload();
        }}
      >
        Stop
      </button>
      <button>Propagate</button>
    </>
  );
}
