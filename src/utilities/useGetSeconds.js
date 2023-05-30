export function useActuallyDate() {
  let actuallyDate = new Date();

  return actuallyDate.getMinutes();
}
