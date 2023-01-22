import { Controller } from "../types/controller";
import { GarageModel } from "./garageModel";

export class GarageController implements Controller{
  model: GarageModel;

  constructor() {
    this.model = new GarageModel;
  }

  numOfCars(){
    return this.model.getNumOfCars()
  }

}