let timer: any;
export const throttle = (
  time: number,
  action: any,
  ...actionParameters: any
) => {
  if (timer) return;
  timer = setTimeout(() => {
    action(...actionParameters);
    clearTimeout(timer);
    timer = null;
  }, time);
};
