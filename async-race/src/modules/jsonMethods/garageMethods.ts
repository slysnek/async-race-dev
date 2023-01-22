import {GetCarsResponse} from '../types/data';

export class GarageMethods {
  url: string;
  garage: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000/'
    this.garage = 'garage'
  }

  /* Optional:
_page=[integer]
_limit=[integer]
If _limit param is passed api returns a header X-Total-Count that countains total number of records.*/
  getCars = async () => {
    const data = await fetch(this.url + this.garage);
    const textData: GetCarsResponse = await data.json();
    if(textData){
      return textData
    } else {
      throw 'Cars did not load'
    }
  }

  getCar = async (id: number) => {
    const data = await fetch(this.url + this.garage + '/' + id);
    const textData = await data.json()
    console.log(textData)
    return textData
  }

  //needs data
  createNewCar = async () => {
    const data = await fetch(this.url + this.garage, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
  }

  deleteCar = async (id: number) => {
    const data = await fetch(this.url + this.garage + '/:' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
  }

  updateCar = async (id: number) => {
    const data = await fetch(this.url + this.garage + '/:' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
  }
}
