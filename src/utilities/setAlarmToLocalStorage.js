function setSetAlarmToLocalStorage(data) {
  let newData = JSON.parse(localStorage.getItem("alarms")) || [];

  console.log(newData);
  if (newData) newData.push(data);

  localStorage.setItem("alarms", JSON.stringify(newData));
}

function setGetAlarmToLocalStorage() {
  return JSON.parse(localStorage.getItem("alarms"));
}

function stopedAlarm(data) {
  let alarms = setGetAlarmToLocalStorage();

  let alarmIndex = alarms.findIndex(
    (alarm) => data.hour === alarm.hour && data.minute === alarm.minute
  );

  alarms[alarmIndex].stoped = true;

  console.log(alarms[alarmIndex]);
  localStorage.setItem("alarms", JSON.stringify(alarms));
}

export { setSetAlarmToLocalStorage, setGetAlarmToLocalStorage, stopedAlarm };
