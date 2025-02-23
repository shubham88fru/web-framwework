export class Attributes<T extends object> {
  constructor(private data: T) {}

  //Note: not a typical getter
  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
