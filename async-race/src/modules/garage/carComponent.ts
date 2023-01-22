import carImage from '../../images/car.svg'
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


  constructor() {
    this.carComponent = document.createElement('div')

    this.carButtonsWrapper = document.createElement('div')
    this.startButton = document.createElement('button')
    this.stopButton = document.createElement('button')
    this.selectButton = document.createElement('button')
    this.removeButton = document.createElement('button')

    this.roadWrapper = document.createElement('div')
    this.car = document.createElementNS('http://www.w3.org/2000/svg','svg')
    this.carIcon = document.createElementNS('http://www.w3.org/2000/svg','use')
    this.finish = document.createElementNS('http://www.w3.org/2000/svg','svg')

    this.carButtonsWrapper.appendChild(this.startButton)
    this.carButtonsWrapper.appendChild(this.stopButton)
    this.carButtonsWrapper.appendChild(this.selectButton)
    this.carButtonsWrapper.appendChild(this.removeButton)

    this.car.appendChild(this.carIcon)
    this.roadWrapper.appendChild(this.car)
    this.roadWrapper.appendChild(this.finish)

    this.carComponent.appendChild(this.carButtonsWrapper)
    this.carComponent.appendChild(this.roadWrapper)

    this.startButton.textContent = 'Start'
    this.stopButton.textContent = 'Stop'
    this.selectButton.textContent = 'Select'
    this.removeButton.textContent = 'Remove'
    //test
    this.carIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${carImage}#car`) 
    this.car.style.width = '50px'
    this.car.style.height = '50px'

  }

  giveCar(){
    return this.carComponent;
  }

}
