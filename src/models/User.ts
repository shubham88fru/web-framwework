import { Eventing } from "./Eventing";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  //Note: not a typical getter
  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
