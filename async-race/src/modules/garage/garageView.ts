import { View } from "../types/view";
import { GarageController } from "./garageController";
import { CarComponent } from "./carComponent";
import { Car, GetCarsResponse, MovingCar, WinnerCar } from "../types/data";
import './garageView.scss'

export class GarageView implements View {
  controller: GarageController;
  root: HTMLElement;

  private garageSection: HTMLElement;
  private winnersSection: HTMLElement;

  private winnerMessage: HTMLElement;

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


  private carComponentWrapper: HTMLDivElement;

  private buttonLeft: HTMLButtonElement;
  private currentPage: HTMLSpanElement;
  private buttonRight: HTMLButtonElement;
  private currentPageWrapper: HTMLDivElement;
  private currentPageNumber: HTMLSpanElement;
  private winnersCounter: HTMLHeadingElement;
  private winnersCounterNumber: HTMLSpanElement;
  private winnersTable: HTMLDivElement;
  private winnersPlace: HTMLDivElement;
  private winnersColor: HTMLDivElement;
  private winnersName: HTMLDivElement;
  private winnersWins: HTMLDivElement;
  private winnersTime: HTMLDivElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.controller = new GarageController;
    //sections
    this.garageSection = document.createElement('div')
    this.winnersSection = document.createElement('div')
    //pop-up
    this.winnerMessage = document.createElement('div')
    //buttons
    this.pageButtonsWrapper = document.createElement('div')
    this.garageButton = document.createElement('button')
    this.winnersButton = document.createElement('button')
    //Create/Update inputs
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
    //WinnersSection
    this.winnersCounter = document.createElement('h3')
    this.winnersCounterNumber = document.createElement('span')

    this.winnersTable = document.createElement('div')
    this.winnersPlace = document.createElement('div')
    this.winnersColor = document.createElement('div')
    this.winnersName = document.createElement('div')
    this.winnersWins = document.createElement('div')
    this.winnersTime = document.createElement('div')
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

    this.winnersCounter.textContent = 'Winners: '
    this.winnersCounterNumber.textContent = 'loading.. '
    this.winnersCounter.appendChild(this.winnersCounterNumber)

    this.winnersTable.appendChild(this.winnersPlace)
    this.winnersTable.appendChild(this.winnersColor)
    this.winnersTable.appendChild(this.winnersName)
    this.winnersTable.appendChild(this.winnersWins)
    this.winnersTable.appendChild(this.winnersTime)
    //append to garage section
    this.garageSection.appendChild(this.carCreateWrapper)
    this.garageSection.appendChild(this.winnerMessage)
    this.garageSection.appendChild(this.carUpdateWrapper)
    this.garageSection.appendChild(this.actionsWrapper)
    this.garageSection.appendChild(this.carsCounter)
    this.garageSection.appendChild(this.currentPageWrapper)
    this.garageSection.appendChild(this.carComponentWrapper)
    //append to winners section
    this.winnersSection.appendChild(this.winnersCounter)
    this.winnersSection.appendChild(this.winnersTable)
    //setting attributes
    this.carsCounter.textContent = 'Total Cars: '
    this.carsCounterNumber.textContent = 'loading...'
    this.carsCounter.appendChild(this.carsCounterNumber)
    //inputs and buttons
    this.carCreateInputColor.type = 'color'
    this.carUpdateInputColor.type = 'color'
    this.carCreateButton.textContent = 'Create'
    this.carUpdateButton.textContent = 'Update'
    this.carUpdateButton.disabled = true;
    this.resetButton.disabled = true;
    this.resetButton.textContent = 'Reset'
    this.addHundredCars.textContent = '+100 cars'
    this.startRace.textContent = 'Start Race'

    this.buttonLeft.textContent = '<'
    this.buttonRight.textContent = '>'
    //Pages
    this.garageButton.textContent = 'Garage'
    this.winnersButton.textContent = 'Winners'
    //winners table
    this.winnersTable.classList.add('table')

    this.winnersPlace.classList.add('table-section')
    this.winnersColor.classList.add('table-section')
    this.winnersName.classList.add('table-section')
    this.winnersWins.classList.add('table-section')
    this.winnersTime.classList.add('table-section')

    this.winnerMessage.classList.add('hidden')
    this.winnerMessage.classList.add('winner-message')

    this.winnersPlace.textContent = 'Place'
    this.winnersColor.textContent = 'Color'
    this.winnersName.textContent = 'Name'
    this.winnersWins.textContent = 'Wins'
    this.winnersTime.textContent = 'Time'
    //listeners
    this.carCreateButton.addEventListener('click', () => {
      const name = this.carCreateInputText.value;
      const color = this.carCreateInputColor.value;
      this.createCar(name, color)
    })

    this.garageButton.addEventListener('click', () => {
      this.changeView()
    })

    this.winnersButton.addEventListener('click', () => {
      this.changeView()
    })

    this.addHundredCars.addEventListener('click', () => {
      this.create100cars()
      this.updateNumberofCars()
    })

    this.carUpdateButton.addEventListener('click', () => {
      this.updateCar()
    })

    this.buttonRight.addEventListener('click', () => {
      this.nextPage()
    })
    this.buttonLeft.addEventListener('click', () => {
      this.prevPage()
    })

    this.startRace.addEventListener('click', () => {
      this.handleRacing('race').then((carsTimeArray)=>{
        const winner = this.controller.figureOutTheWinner(carsTimeArray)
        this.displayWinner(winner)
      })
    })

    this.resetButton.addEventListener('click', () => {
      this.handleRacing('reset')
    })

  }

  //garage methods
  private createCar = (name: string, color: string) => {
    if (name === '') {
      alert('Name cannot be empty!')
      return;
    }
    color = this.carCreateInputColor.value;
    this.controller.createCar(name, color)?.then(() => {
      this.updateNumberofCars()
      this.displayCars()
    })
  }

  private updateCar = () => {
    const color = this.carUpdateInputColor.value;
    const name = this.carUpdateInputText.value
    this.controller.updateCar(color, name).then(() => {
      this.displayCars()
      this.carUpdateButton.disabled = true;
    })
  }

  private deleteCar(car: Car) {
    this.controller.deleteCar(car.id).then(() => {
      this.controller.deleteWinner(car.id).then(() => {
        this.updateNumberofWinners()
        this.getWinners()
        this.updateNumberofCars()
        this.displayCars()
      })
    })
  }

  private create100cars = () => {
    this.controller.create100cars()
    this.updateNumberofCars()
    this.displayCars()
  }

  private updateNumberofCars = () => {
    this.controller.getCars().then((cars) => {
      this.carsCounterNumber.textContent = cars.length.toString();
    })
  }

  private updateNumberofWinners = () => {
    this.controller.getWinners().then((winners) => {
      this.winnersName.textContent = winners.length.toString();
    })
  }

  private turnEngineToStarted = (car: Car) => {
    return this.controller.turnEngine(car.id, 'started').then((movCar) => {
      return movCar;
    })
  }

  private turnEngineToStopped = (car: Car) => {
    return this.controller.turnEngine(car.id, 'stopped').then((movCar) => {
      return movCar;
    })
  }

  private turnEngineToDrive = (movCar: MovingCar) => {
    this.controller.turnEngineToDrive(movCar.id, 'drive').then(() => {
      console.log(`the car with id ${movCar.id} is okay`);
    }).catch(() => {
      console.log(`the car with id ${movCar.id} is broken`);
    })
  }

  private displayCars = () => {
    this.carComponentWrapper.innerHTML = ''
    this.controller.getCars().then((cars) => {
      const paginatedCars = this.updatePagination(cars)
      paginatedCars.forEach((car) => {
        const newCar = new CarComponent(car)
        let request: number | undefined;
        newCar.stopButton.disabled = true;
        newCar.carEl.id = String(car.id);
        newCar.selectButton.addEventListener('click', () => {
          this.controller.changeSelectedCar(car)
          this.carUpdateInputText.value = newCar.carName.innerHTML;
          this.carUpdateButton.disabled = false;
        })
        newCar.removeButton.addEventListener('click', () => {
          this.deleteCar(car)
        })
        newCar.startButton.addEventListener('click', () => {
          newCar.stopButton.disabled = false;
          newCar.startButton.disabled = true;
          this.turnEngineToStarted(car).then((movCar) => {
            this.turnEngineToDrive(movCar)
            const duration = Math.round((movCar.distance / movCar.velocity / 1000) * 100) / 100;
            request = this.controller.animationHandler(duration, newCar.carEl) //return only once?
          })
        })
        newCar.stopButton.addEventListener('click', () => {
          newCar.startButton.disabled = false;
          newCar.stopButton.disabled = true;
          this.turnEngineToStopped(car).then((movCar) => {
            const duration = Math.round((movCar.distance / movCar.velocity / 1000) * 100) / 100;
            this.controller.animationHandler(duration, newCar.carEl, request) //stops the car but next race automatically puts the cat to the beginning of the road
          })
        })
        this.carComponentWrapper.appendChild(newCar.giveCar())
      })
    })
  }

  //pagination
  private updatePagination = (cars: GetCarsResponse) => {
    const paginationLimit = 7;
    const pageCount = Math.ceil(cars.length / paginationLimit);
    const currentPage = this.getCurrentPage();
    this.currentPageNumber.textContent = currentPage.toString();

    if (currentPage === 1) {
      this.buttonLeft.disabled = true;
    } else {
      this.buttonLeft.disabled = false;
    }

    if (currentPage >= pageCount) {
      this.buttonRight.disabled = true;
    } else {
      this.buttonRight.disabled = false;
    }

    const currentRangeMin = (currentPage - 1) * paginationLimit;
    let currentRangeMax = currentPage * paginationLimit;
    if (currentRangeMax > cars.length) { currentRangeMax = cars.length; }
    return cars.slice(currentRangeMin, currentRangeMax)
  }
  private nextPage = () => {
    const currentPage = this.getCurrentPage()
    this.setCurrentPage(currentPage + 1)
    this.displayCars()
  }
  private prevPage = () => {
    const currentPage = this.getCurrentPage()
    this.setCurrentPage(currentPage - 1)
    this.displayCars()
  }
  private setCurrentPage(page: number) {
    this.controller.setCurrentPage(page)
  }
  private getCurrentPage() {
    return this.controller.getCurrentPage()
  }

  //winners methods

  //not fully implemented, only get the standard first winner and delete it from table on car deletion
  private getWinners = () => {
    this.controller.getWinners().then((winners) => {
      this.winnersCounterNumber.textContent = winners.length.toString()
      let place = 0 //debug
      if (winners) {
        this.winnersPlace.innerHTML = ''
        this.winnersColor.innerHTML = ''
        this.winnersName.innerHTML = ''
        this.winnersWins.innerHTML = ''
        this.winnersTime.innerHTML = ''
        winners.forEach((winner) => {
          this.controller.getCar(winner.id).then((car) => {
            place++
            const winnerCar: WinnerCar = {
              id: winner.id,
              wins: winner.wins,
              time: winner.time,
              color: car.color,
              name: car.name
            }
            const timeDiv = document.createElement('p')
            const colorDiv = document.createElement('p')
            const winDiv = document.createElement('p')
            const nameDiv = document.createElement('p')
            const placeDiv = document.createElement('p')
            timeDiv.textContent = winnerCar.time.toString()
            colorDiv.textContent = winnerCar.color
            winDiv.textContent = winnerCar.wins.toString()
            nameDiv.textContent = winnerCar.name.toString()
            placeDiv.textContent = place.toString()
            this.winnersPlace.appendChild(placeDiv)
            this.winnersColor.appendChild(colorDiv)
            this.winnersName.appendChild(nameDiv)
            this.winnersWins.appendChild(winDiv)
            this.winnersTime.appendChild(timeDiv)
          })
        })
      }
    })
  }

  //basic view methods
  private addGarageElements() {
    this.root.appendChild(this.pageButtonsWrapper)
    this.root.appendChild(this.garageSection)
  }

  private addWinnersElements() {
    this.root.appendChild(this.winnersSection)
    this.winnersSection.classList.add('hidden')
  }

  private changeView() {
    this.garageSection.classList.toggle('hidden')
    this.winnersSection.classList.toggle('hidden')
  }

  mount() {
    this.addGarageElements()
    this.addWinnersElements()
    this.updateNumberofCars()
    this.displayCars()
    this.getCurrentPage()
    this.getWinners()
  }

  //race
  private handleRacing(raceMode: string) {
    const carsTimeArray: MovingCar[] = [];
    const promiseArray: Promise<MovingCar | void>[] = [];
    return this.controller.getCars().then((cars: GetCarsResponse) => {
      const paginatedCars = this.updatePagination(cars)
      paginatedCars.forEach((car) => {
        let request: number;
        const theCarImg = document.getElementById(String(car.id)) as unknown as SVGSVGElement;
        if (raceMode === 'race') {
          this.startRace.disabled = true;
          this.resetButton.disabled = false;
            promiseArray.push(this.turnEngineToStarted(car).then((movCar) => {
              this.turnEngineToDrive(movCar)
              carsTimeArray.push(movCar)
              const duration = Math.round((movCar.distance / movCar.velocity / 1000) * 100) / 100;
              request = this.controller.animationHandler(duration, theCarImg) //return only once?
            }))
        } else if (raceMode === 'reset') {
          this.startRace.disabled = false;
          this.resetButton.disabled = true;
          this.turnEngineToStopped(car).then((movCar) => {
            const duration = Math.round((movCar.distance / movCar.velocity / 1000) * 100) / 100;
            this.controller.animationHandler(duration, theCarImg, request) //stops the car but next race automatically puts the cat to the beginning of the road
          })
        }
      })
    }).then(()=>{
      return Promise.all(promiseArray).then(() =>{
        return carsTimeArray
      })
    })

  }

  displayWinner(winner: MovingCar){
    const winnerDuration = Math.round((winner.distance / winner.velocity / 1000) * 100) / 100;
    setTimeout(() => {
      let winnerName: string;
      let winnerId: string;
      this.controller.getCar(winner.id).then((car) => {
        winnerName = car.name
        winnerId = car.id.toString()
      }).then(() => {
        setTimeout(() => {
          this.winnerMessage.textContent = `The winner is car with name ${winnerName} and id ${winnerId}!`
          this.winnerMessage.classList.remove('hidden')
          setTimeout(() => {
            this.winnerMessage.textContent = ''
            this.winnerMessage.classList.add('hidden')
          }, 4000);
        }, winnerDuration * 1000);
      })
    }, winnerDuration);
  }


}