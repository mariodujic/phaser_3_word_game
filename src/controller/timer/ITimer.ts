export interface ITimer {
  startTimer();
  stopTimer();
  resetTimer();
  increaseTime(increaseAmount: number);
}
