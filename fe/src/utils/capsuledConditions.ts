export const isEqual = <T>(firstTarget: T, secondTarget: T): boolean =>
  firstTarget === secondTarget;

export const isFrontBiggerThanRear = <T>(
  firstTarget: T,
  secondTarget: T,
): boolean => firstTarget > secondTarget;
