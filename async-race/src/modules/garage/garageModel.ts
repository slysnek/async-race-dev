import { EngineMethods } from "../jsonMethods/engineMethods";
import { GarageMethods } from "../jsonMethods/garageMethods";
import { WinnersMethods } from "../jsonMethods/winnersMethods";
import { GetCarsResponse } from "../types/data";
import { Model } from "../types/model";
import { Car } from "../types/data";

export class GarageModel implements Model{
  cars: GetCarsResponse | undefined;
  randomName1: string[];
  randomName2: string[];
  selectedCar: Car;

  engineAPI: EngineMethods = new EngineMethods;
  garageAPI: GarageMethods = new GarageMethods;
  winnersAPI: WinnersMethods = new WinnersMethods;

  constructor(){
    this.randomName1 = ['Mercedes', 'Ford', 'Lada', 'Porsche', 'Renault', 'Chevrolet', 'Toyota', 'Mazda', 'Lexus', 'BMW']
    this.randomName2 = ['C600', 'Focus', 'Kalina', 'Cayene', 'Logan', 'Cruze', 'Camri', '6', 'RX510', 'X4']
    this.selectedCar = {
      name: 'no car',
      color: '000000',
      id: 0
    }
  }

   getCars(){
    return this.garageAPI.getCars().then((data) => {
      this.cars = data;
      return this.cars
    })
  }

  createCar(name:string, color:string){
    return this.garageAPI.createNewCar(name, color).then((data) => {
      this.cars?.push(data)
      return this.cars;
    })
  }

  create100cars(){
    for (let i = 0; i < 100; i++) {
      const randomName = this.createRandomName();
      const randomColor = this.createRandomColor();
      this.garageAPI.createNewCar(randomName, randomColor).then((data) => {
        this.cars?.push(data)
      })
    }
    return this.cars
  }

  createRandomName(){
    const firstName = this.randomName1[Math.floor(Math.random() * 10)];
    const secondName = this.randomName2[Math.floor(Math.random() * 10)];
    return firstName + ' ' + secondName;
  }

  createRandomColor(){
    const values = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += values[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changeSelectedCar(car:Car){
    this.selectedCar.color = car.color;
    this.selectedCar.id = car.id;
    this.selectedCar.name = car.name;
    console.log(this.selectedCar);
  }

  updateSelectedCar(color:string, name:string):Promise<Car>{
    const id = this.selectedCar.id;
    return this.garageAPI.updateCar(id, color, name).then((car)=>{
      this.selectedCar.color = car.color
      this.selectedCar.name = car.name
      return car
    })
  }



}