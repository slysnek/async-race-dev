import { Controller } from '../types/controller';
import { Car, MovingCar } from '../types/data';
import GarageModel from './garageModel';

export default class GarageController implements Controller {
  model: GarageModel;

  constructor() {
    this.model = new GarageModel();
  }

  getCars() {
    return this.model.getCars();
  }

  getCar(id: number) {
    return this.model.getCar(id);
  }

  createCar(name: string, color: string) {
    return this.model.createCar(name, color);
  }

  create100cars() {
    return this.model.create100cars();
  }

  changeSelectedCar(car: Car) {
    return this.model.changeSelectedCar(car);
  }

  updateCar = (color: string, name: string) => this.model.updateSelectedCar(color, name);

  deleteCar = (id: number) => this.model.deleteCar(id);

  turnEngine = (id: number, status: 'started' | 'stopped') => this.model.turnEngine(id, status);

  turnEngineToDrive(id: number, status: 'drive') {
    return this.model.turnEngineToDrive(id, status);
  }

  setCurrentPage = (page: number) => {
    this.model.setCurrentPage(page);
  };

  getCurrentPage = () => this.model.getCurrentPage();

  getWinners = () => this.model.getWinners();

  deleteWinner = (id: number) => this.model.deleteWinner(id);

  animationHandler = (duration: number, carImg: SVGSVGElement, request?: number) => 
  this.model.animationHandler(duration, carImg, request);

  figureOutTheWinner(racingCars: MovingCar[]) {
    return this.model.figureOutTheWinner(racingCars);
  }
}
