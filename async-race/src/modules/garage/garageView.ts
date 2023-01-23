import { View } from "../types/view";
import { GarageController } from "./garageController";
import { CarComponent } from "./carComponent";
import { Car, GetCarsResponse } from "../types/data";
import './garageView.scss'

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
  private carComponentWrapper: HTMLDivElement;

  private buttonLeft: HTMLButtonElement;
  private currentPage: HTMLSpanElement;
  private buttonRight: HTMLButtonElement;
  private currentPageWrapper: HTMLDivElement;
  private currentPageNumber: HTMLSpanElement;

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
    //Page
    this.currentPageWrapper = document.createElement('div')
    this.buttonLeft = document.createElement('button')
    this.buttonRight = document.createElement('button')
    this.currentPage = document.createElement('h3')
    this.currentPageNumber = document.createElement('span')
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

    this.currentPageWrapper.appendChild(this.buttonLeft)
    this.currentPageWrapper.appendChild(this.buttonRight)
    this.currentPageWrapper.appendChild(this.currentPage)
    this.currentPage.textContent = 'Page: '
    this.currentPageNumber.textContent = 'loading..'
    this.currentPage.appendChild(this.currentPageNumber)

    //setting attributes
    this.carsCounter.textContent = 'Total Cars: '
    this.carsCounterNumber.textContent = 'loading...'
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

    this.buttonLeft.textContent = '<'
    this.buttonRight.textContent = '>'

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

    this.buttonRight.addEventListener('click', ()=>{
      this.nextPage()
    })
    this.buttonLeft.addEventListener('click', ()=>{
      this.prevPage()
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
/*       const carArray: CarComponent[] = []; */
      const paginatedCars = this.updatePagination(cars)
      paginatedCars.forEach((car)=>{
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
        newCar.startButton.addEventListener('click', ()=>{
          this.controller.turnEngine(car.id, 'started').then((val)=>{
            const width = newCar.carComponent.clientWidth * 0.9;
            newCar.carEl.style.transition = `${val.distance/val.velocity/1000}s`
            newCar.carEl.style.transform = `translateX(${width}px)`
          })
        })
        newCar.stopButton.addEventListener('click', ()=>{
          this.controller.turnEngine(car.id, 'stopped')
        })
/*         carArray.push(newCar) */
        this.carComponentWrapper.appendChild(newCar.giveCar())
      })
    })
  }

  updatePagination = (cars: GetCarsResponse) => {
    const paginationLimit = 7;
    const pageCount = Math.ceil(cars.length / paginationLimit); //44 / 7 = 9
    const currentPage = this.getCurrentPage();
    this.currentPageNumber.textContent = currentPage.toString();

    if(currentPage === 1){
      this.buttonLeft.disabled = true;
    } else {
      this.buttonLeft.disabled = false;
    }

    if(currentPage >= pageCount){
      this.buttonRight.disabled = true;
    } else {
      this.buttonRight.disabled = false;
    }

    const currentRangeMin = (currentPage-1) * paginationLimit;
    let currentRangeMax = currentPage * paginationLimit;
    if(currentRangeMax > cars.length){currentRangeMax = cars.length;}
    console.log(currentRangeMin, currentRangeMax);
    return cars.slice(currentRangeMin, currentRangeMax)
  }

  nextPage = () => {
    const currentPage = this.getCurrentPage()
    this.setCurrentPage(currentPage + 1)
    this.displayCars()
  }

  prevPage = () => {
    const currentPage = this.getCurrentPage()
    this.setCurrentPage(currentPage - 1)
    this.displayCars()
  }

  

  updateCar = () => {
    const color = this.carUpdateInputColor.value;
    const name = this.carUpdateInputText.value
    this.controller.updateCar(color, name).then(()=>{
      this.displayCars()
      this.carUpdateButton.disabled = true;
    })
  }

/*   driveAnimation = () => {

  } */

  start() {
    this.root.appendChild(this.pageButtonsWrapper)
    this.root.appendChild(this.carCreateWrapper)
    this.root.appendChild(this.carUpdateWrapper)
    this.root.appendChild(this.actionsWrapper)
    this.root.appendChild(this.carsCounter)
    this.root.appendChild(this.currentPageWrapper)
    this.root.appendChild(this.carComponentWrapper)
  }

  setCurrentPage(page:number){
    this.controller.setCurrentPage(page)
  }
  getCurrentPage(){
    console.log(this.controller.getCurrentPage());
    return this.controller.getCurrentPage()
  }
  
}