import { Controller } from "../types/controller";
import { GarageModel } from "./garageModel";

export class GarageController implements Controller{
  model: GarageModel;

  constructor() {
    this.model = new GarageModel;
  }

  getCars(){
    return this.model.getCars()
  }

}