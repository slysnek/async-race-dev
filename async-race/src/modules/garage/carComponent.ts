import carImage from '../../images/car.svg'
import flagImage from '../../images/flag.svg'
import { Car } from '../types/data';
import { GarageController } from './garageController';
export class CarComponent {
  controller: GarageController
  public carComponent: HTMLDivElement;
  private carButtonsWrapper: HTMLDivElement;
  public startButton: HTMLButtonElement;
  public stopButton: HTMLButtonElement;
  public selectButton: HTMLButtonElement;
  public removeButton: HTMLButtonElement;
  public roadWrapper: HTMLDivElement;
  public carEl: SVGSVGElement;
  private carIcon: SVGUseElement;
  private finish: SVGSVGElement;
  public carName: HTMLParagraphElement;
  public carId: HTMLParagraphElement;
  finishIcon: SVGUseElement;


  constructor(car:Car) {
    this.controller = new GarageController;
    this.carComponent = document.createElement('div')

    this.carButtonsWrapper = document.createElement('div')
    this.startButton = document.createElement('button')
    this.stopButton = document.createElement('button')
    this.selectButton = document.createElement('button')
    this.removeButton = document.createElement('button')
    this.carName = document.createElement('p')
    this.carId = document.createElement('p')

    this.roadWrapper = document.createElement('div')
    this.carEl = document.createElementNS('http://www.w3.org/2000/svg','svg')
    this.carIcon = document.createElementNS('http://www.w3.org/2000/svg','use')
    this.finish = document.createElementNS('http://www.w3.org/2000/svg','svg')
    this.finishIcon = document.createElementNS('http://www.w3.org/2000/svg','use')

    this.carButtonsWrapper.appendChild(this.startButton)
    this.carButtonsWrapper.appendChild(this.stopButton)
    this.carButtonsWrapper.appendChild(this.selectButton)
    this.carButtonsWrapper.appendChild(this.removeButton)
    this.carButtonsWrapper.appendChild(this.carName)
    this.carButtonsWrapper.appendChild(this.carId)

    this.carEl.appendChild(this.carIcon)
    this.finish.appendChild(this.finishIcon)
    this.roadWrapper.appendChild(this.carEl)
    this.roadWrapper.appendChild(this.finish)


    this.carComponent.appendChild(this.carButtonsWrapper)
    this.carComponent.appendChild(this.roadWrapper)

    this.carComponent.classList.add('car-component')

    this.startButton.textContent = 'Start'
    this.stopButton.textContent = 'Stop'
    this.selectButton.textContent = 'Select'
    this.removeButton.textContent = 'Remove'
    this.carName.textContent = car.name;
    this.carId.textContent = `ID: ${car.id}`;

    this.carIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${carImage}#car`) 
    this.finishIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${flagImage}#flag`) 
    this.carEl.style.width = '50px'
    this.carEl.style.height = '50px'
    this.finish.style.width = '50px'
    this.finish.style.height = '50px'
    this.finish.style.position = 'absolute'
    this.finish.style.left = 'calc(100% - 100px)';
    this.carEl.style.fill = car.color;

    this.carEl.style.position = 'relative'

  }

  public giveCar(){
    return this.carComponent;
  }

}
