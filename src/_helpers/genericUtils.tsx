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

export const scrollAdapter = (
  scrollLevel: number,
  scrollRange: number[],
  targetRange: number[],
): number => {
  // on ranges => [small, big]
  // this function "reduces" items on scroll
  let scrollRangeDif = Math.abs(scrollRange[1] - scrollRange[0]);
  let targetRangeDif = Math.abs(targetRange[1] - targetRange[0]);
  let proportion = targetRangeDif / scrollRangeDif;

  let scrollOutput = targetRange[1] - scrollLevel * proportion;

  let output = scrollOutput < targetRange[0] ? targetRange[0] : scrollOutput;

  return output;
};
