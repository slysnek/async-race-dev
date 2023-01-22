import carImage from '../../images/car.svg'
import { Car } from '../types/data';
export class CarComponent {
  private carComponent: HTMLDivElement;
  private carButtonsWrapper: HTMLDivElement;
  private startButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private selectButton: HTMLButtonElement;
  private removeButton: HTMLButtonElement;
  private roadWrapper: HTMLDivElement;
  car: SVGSVGElement;
  carIcon: SVGUseElement;
  finish: SVGSVGElement;
  carName: HTMLParagraphElement;
  carId: HTMLParagraphElement;


  constructor(car:Car) {
    this.carComponent = document.createElement('div')

    this.carButtonsWrapper = document.createElement('div')
    this.startButton = document.createElement('button')
    this.stopButton = document.createElement('button')
    this.selectButton = document.createElement('button')
    this.removeButton = document.createElement('button')
    this.carName = document.createElement('p')
    this.carId = document.createElement('p')

    this.roadWrapper = document.createElement('div')
    this.car = document.createElementNS('http://www.w3.org/2000/svg','svg')
    this.carIcon = document.createElementNS('http://www.w3.org/2000/svg','use')
    this.finish = document.createElementNS('http://www.w3.org/2000/svg','svg')

    this.carButtonsWrapper.appendChild(this.startButton)
    this.carButtonsWrapper.appendChild(this.stopButton)
    this.carButtonsWrapper.appendChild(this.selectButton)
    this.carButtonsWrapper.appendChild(this.removeButton)
    this.carButtonsWrapper.appendChild(this.carName)
    this.carButtonsWrapper.appendChild(this.carId)

    this.car.appendChild(this.carIcon)
    this.roadWrapper.appendChild(this.car)
    this.roadWrapper.appendChild(this.finish)

    this.carComponent.appendChild(this.carButtonsWrapper)
    this.carComponent.appendChild(this.roadWrapper)

    this.startButton.textContent = 'Start'
    this.stopButton.textContent = 'Stop'
    this.selectButton.textContent = 'Select'
    this.removeButton.textContent = 'Remove'
    this.carName.textContent = car.name;
    this.carId.textContent = `ID: ${car.id}`;
    //test
    this.carIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${carImage}#car`) 
    this.car.style.width = '50px'
    this.car.style.height = '50px'
    this.car.style.fill = car.color;

  }

  giveCar(){
    return this.carComponent;
  }

}
