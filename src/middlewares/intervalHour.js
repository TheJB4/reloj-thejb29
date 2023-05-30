import { setSecondsInitial } from "../features/reloj/relojSlice";

let intervalHour = (store) => (next) => (action) => {
  // Realiza lógica adicional antes de pasar la acción al siguiente middleware o al reducer
  const state = store.getState().relojState;
  let secondsTime = state.seconds;
  let reloj;
  if (action.type === "reloj/setMinutesInitial") {
    //reloj = setInterval(() => {
    //secondsTime++;
    //console.log(secondsTime);
    //store.dispatch(setSecondsInitial(secondsTime));
    //}, 1000);
  }
  // Ejecuta la llamada al siguiente middleware o al reducer
  const result = next(action);

  // Realiza lógica adicional después de pasar la acción al siguiente middleware o al reducer
  if (secondsTime === 60) {
    clearInterval(reloj);
  }
  // Devuelve el resultado de la llamada al siguiente middleware o al reducer
  return result;
};

export { intervalHour };
