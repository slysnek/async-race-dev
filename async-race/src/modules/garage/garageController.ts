import { Controller } from "../types/controller";
import { Car } from "../types/data";
import { GarageModel } from "./garageModel";

export class GarageController implements Controller{
  model: GarageModel;

  constructor() {
    this.model = new GarageModel;
  }

  getCars(){
    return this.model.getCars()
  }

  createCar(name:string, color:string){
    return this.model.createCar(name, color)
  }

  create100cars(){
    return this.model.create100cars()
  }

  changeSelectedCar(car: Car){
    this.model.changeSelectedCar(car)
  }

  updateCar = (color:string, name:string) => {
    return this.model.updateSelectedCar(color, name)
  }

  deleteCar = (id: number) => {
    return this.model.deleteCar(id);
  }

  turnEngine=(id:number, status: 'started' | 'stopped')=>{
    return this.model.turnEngine(id, status)
  }

  turnEngineToDrive(id: number, status: 'drive'){
    return this.model.turnEngineToDrive(id, status)
  }

  setCurrentPage = (page:number) => {
    this.model.setCurrentPage(page);
  }

  getCurrentPage = () => {
    return this.model.getCurrentPage();
  }

}