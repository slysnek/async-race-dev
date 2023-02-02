import { Car, GetCarsResponse } from '../types/data';

export default class GarageMethods {
  url: string;

  garage: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000/';
    this.garage = 'garage';
  }

  /* Optional:
_page=[integer]
_limit=[integer]
If _limit param is passed api returns a header X-Total-Count
 that countains total number of records. */
  getCars = async () => {
    const data = await fetch(this.url + this.garage);
    const textData: GetCarsResponse = await data.json();
    if (textData) {
      return textData;
    }
    throw new Error('Cars did not load');
  };

  getCar = async (id: number) => {
    const data = await fetch(`${this.url + this.garage}/${id}`);
    const textData: Car = await data.json();
    return textData;
  };

  createNewCar = async (name: string, color: string) => {
    const data = await fetch(this.url + this.garage, {
      method: 'POST',
      body: JSON.stringify(
        {
          name,
          color,
        },
      ),
      headers: { 'Content-Type': 'application/json' },
    });
    const textData: Car = await data.json();
    return textData;
  };

  deleteCar = async (id: number) => {
    await fetch(`${this.url + this.garage}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  };

  updateCar = async (id: number, color: string, name: string) => {
    const data = await fetch(`${this.url + this.garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(
        {
          name,
          color,
        },
      ),
      headers: { 'Content-Type': 'application/json' },
    });
    const textData: Car = await data.json();
    return textData;
  };
}
