export class Logger {
  static log<T>(target: T) {
    console.log(target);
    return target;
  }
}
