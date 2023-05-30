export function useActuallyDate() {
  let actuallyDate = new Date();

  let hour = actuallyDate.getHours();
  let minutes = actuallyDate.getMinutes();
  let seconds = actuallyDate.getSeconds();

  return { hour, minutes, seconds };
}
