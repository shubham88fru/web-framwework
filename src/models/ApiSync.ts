import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    //if id exists, means the user already exists in the db
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    }
    return axios.post(this.rootUrl, data);
  }
}
