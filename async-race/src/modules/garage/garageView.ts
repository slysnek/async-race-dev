import { View } from "../types/view";
import { GarageController } from "./garageController";
import { CarComponent } from "./carComponent";
import { Car } from "../types/data";

export class GarageView implements View{
  controller: GarageController;
  root: HTMLElement;
  private garageButton: HTMLButtonElement;
  private winnersButton: HTMLButtonElement;

  private pageButtonsWrapper: HTMLDivElement;
  private carUpdateButton: HTMLButtonElement;
  private carCreateWrapper: HTMLDivElement;
  private carUpdateWrapper: HTMLDivElement;
  private carCreateInputText: HTMLInputElement;
  private carCreateInputColor: HTMLInputElement;
  private carUpdateInputText: HTMLInputElement;
  private carUpdateInputColor: HTMLInputElement;
  private carCreateButton: HTMLButtonElement;

  private actionsWrapper: HTMLDivElement;
  private resetButton: HTMLButtonElement;
  private addHundredCars: HTMLButtonElement;
  private startRace: HTMLButtonElement;

  private carsCounter: HTMLHeadingElement;
  private carsCounterNumber: HTMLSpanElement;

  private carComponent!: CarComponent
  private carInstance!: Car;
  carComponentWrapper: HTMLDivElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.controller = new GarageController;
    //buttons
    this.pageButtonsWrapper = document.createElement('div')
    this.garageButton = document.createElement('button')
    this.winnersButton = document.createElement('button')
    //Create/Update
    this.carCreateWrapper = document.createElement('div')
    this.carUpdateWrapper = document.createElement('div')
    this.carCreateInputText = document.createElement('input')
    this.carCreateInputColor = document.createElement('input')
    this.carUpdateInputText = document.createElement('input')
    this.carUpdateInputColor = document.createElement('input')
    this.carCreateButton = document.createElement('button')
    this.carUpdateButton = document.createElement('button')
    //Action Buttons
    this.actionsWrapper = document.createElement('div')
    this.resetButton = document.createElement('button')
    this.addHundredCars = document.createElement('button')
    this.startRace = document.createElement('button')
    //Car Counter
    this.carsCounter = document.createElement('h3')
    this.carsCounterNumber = document.createElement('span')
    //car wrapper
    this.carComponentWrapper = document.createElement('div')
    //appending
    this.pageButtonsWrapper.appendChild(this.garageButton)
    this.pageButtonsWrapper.appendChild(this.winnersButton)

    this.carCreateWrapper.appendChild(this.carCreateInputText)
    this.carCreateWrapper.appendChild(this.carCreateInputColor)
    this.carCreateWrapper.appendChild(this.carCreateButton)
    this.carUpdateWrapper.appendChild(this.carUpdateInputText)
    this.carUpdateWrapper.appendChild(this.carUpdateInputColor)
    this.carUpdateWrapper.appendChild(this.carUpdateButton)

    this.actionsWrapper.appendChild(this.resetButton)
    this.actionsWrapper.appendChild(this.addHundredCars)
    this.actionsWrapper.appendChild(this.startRace)

    //setting attributes
    this.carsCounter.textContent = 'Total Cars: '
    this.carsCounterNumber.textContent = 'TODO'
    this.carsCounter.appendChild(this.carsCounterNumber)

    this.carCreateInputColor.type = 'color'
    this.carUpdateInputColor.type = 'color'
    
    this.garageButton.textContent = 'Garage'
    this.winnersButton.textContent = 'Winners'
    this.carCreateButton.textContent = 'Create'
    this.carUpdateButton.textContent = 'Update'
    this.carUpdateButton.disabled = true;

    this.resetButton.textContent = 'Reset'
    this.addHundredCars.textContent = '+100 cars'
    this.startRace.textContent = 'Start Race'

    this.carCreateButton.addEventListener('click', () => {
      const name = this.carCreateInputText.value;
      const color = this.carCreateInputColor.value;
      this.createCar(name, color)
    })

    this.addHundredCars.addEventListener('click', () => {
      this.create100cars()
      this.updateNumberofCars()
    })
    
    this.carUpdateButton.addEventListener('click', () => {
      this.updateCar()
    })
  }  

  createCar = (name:string, color:string) => {
    if(name === ''){
      alert('Name cannot be empty!')
      return;
    }
    color = this.carCreateInputColor.value;
    this.controller.createCar(name, color)?.then((car) => {
      console.log(car)
      this.updateNumberofCars()
      this.displayCars()
    })
  }

  create100cars = () => {
    this.controller.create100cars()
    this.updateNumberofCars()
    this.displayCars()
  }

  updateNumberofCars = () => {
    this.controller.getCars().then((cars) => {
      this.carsCounterNumber.textContent = cars.length.toString();
    })
  }

  displayCars = () => {
    this.carComponentWrapper.innerHTML = ''
    this.controller.getCars().then((cars) => {
      cars.forEach((car)=>{
        const newCar = new CarComponent(car)
        newCar.selectButton.addEventListener('click', ()=>{
          this.controller.changeSelectedCar(car)
          this.carUpdateInputText.value = newCar.carName.innerHTML;
          this.carUpdateButton.disabled = false;
        })
        newCar.removeButton.addEventListener('click', ()=>{
          this.controller.deleteCar(car.id).then(()=>{
            this.updateNumberofCars()
            this.displayCars()
          })
        })
        this.carComponentWrapper.appendChild(newCar.giveCar())
      })
    })
  }

  updateCar = () => {
    const color = this.carUpdateInputColor.value;
    const name = this.carUpdateInputText.value
    this.controller.updateCar(color, name).then(()=>{
      this.displayCars()
      this.carUpdateButton.disabled = true;
    })
  }

  start() {
    this.root.appendChild(this.pageButtonsWrapper)
    this.root.appendChild(this.carCreateWrapper)
    this.root.appendChild(this.carUpdateWrapper)
    this.root.appendChild(this.actionsWrapper)
    this.root.appendChild(this.carsCounter)
    this.root.appendChild(this.carComponentWrapper)
  }
  
}