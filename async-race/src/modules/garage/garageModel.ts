import { EngineMethods } from "../jsonMethods/engineMethods";
import { GarageMethods } from "../jsonMethods/garageMethods";
import { WinnersMethods } from "../jsonMethods/winnersMethods";
import { GetCarsResponse } from "../types/data";
import { Model } from "../types/model";

export class GarageModel implements Model{
  cars: GetCarsResponse | undefined;


  engineAPI: EngineMethods = new EngineMethods;
  garageAPI: GarageMethods = new GarageMethods;
  winnersAPI: WinnersMethods = new WinnersMethods;

   getCars(){
    return this.garageAPI.getCars().then((data) => {
      this.cars = data;
      return this.cars
    })
  }



}