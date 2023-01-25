import { View } from "../types/view";
import { GarageController } from "./garageController";
import { CarComponent } from "./carComponent";
import { Car, GetCarsResponse, MovingCar, WinnerCar } from "../types/data";
import './garageView.scss'
import { WinnersMethods } from "../jsonMethods/winnersMethods";

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

  private carComponent!: CarComponent
  private carInstance!: Car;
  private carComponentWrapper: HTMLDivElement;

  private buttonLeft: HTMLButtonElement;
  private currentPage: HTMLSpanElement;
  private buttonRight: HTMLButtonElement;
  private currentPageWrapper: HTMLDivElement;
  private currentPageNumber: HTMLSpanElement;
  winnersCounter: HTMLHeadingElement;
  winnersCounterNumber: HTMLSpanElement;
  winnersTable: HTMLDivElement;
  winnersPlace: HTMLDivElement;
  winnersColor: HTMLDivElement;
  winnersName: HTMLDivElement;
  winnersWins: HTMLDivElement;
  winnersTime: HTMLDivElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.controller = new GarageController;
    //sections
    this.garageSection = document.createElement('div')
    this.winnersSection = document.createElement('div')

    this.winnerMessage = document.createElement('div')

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

    this.carCreateInputColor.type = 'color'
    this.carUpdateInputColor.type = 'color'

    this.garageButton.textContent = 'Garage'
    this.winnersButton.textContent = 'Winners'
    this.carCreateButton.textContent = 'Create'
    this.carUpdateButton.textContent = 'Update'
    this.carUpdateButton.disabled = true;
    this.resetButton.disabled = true;

    this.resetButton.textContent = 'Reset'
    this.addHundredCars.textContent = '+100 cars'
    this.startRace.textContent = 'Start Race'

    this.buttonLeft.textContent = '<'
    this.buttonRight.textContent = '>'

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
      this.handleRacing('race')
    })

    this.resetButton.addEventListener('click', () => {
      this.handleRacing('reset')
    })

  }

  //garage methods
  createCar = (name: string, color: string) => {
    if (name === '') {
      alert('Name cannot be empty!')
      return;
    }
    color = this.carCreateInputColor.value;
    this.controller.createCar(name, color)?.then((car) => {
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

  updateNumberofWinners = () => {
    this.controller.getWinners().then((winners) => {
      this.winnersName.textContent = winners.length.toString();
    })
  }

  displayCars = () => {
    this.carComponentWrapper.innerHTML = ''
    this.controller.getCars().then((cars) => {
      const paginatedCars = this.updatePagination(cars)
      paginatedCars.forEach((car) => {
        const newCar = new CarComponent(car)
        let request: number | undefined;
        newCar.selectButton.addEventListener('click', () => {
          this.controller.changeSelectedCar(car)
          this.carUpdateInputText.value = newCar.carName.innerHTML;
          this.carUpdateButton.disabled = false;
        })
        newCar.removeButton.addEventListener('click', () => {
          this.controller.deleteCar(car.id).then(() => {
            this.controller.deleteWinner(car.id).then(() => {
              this.updateNumberofWinners()
              this.updateNumberofCars()
              this.displayCars()
              this.getWinners()
            })
          })
        })

        newCar.startButton.addEventListener('click', () => {
          newCar.stopButton.disabled = false;
          newCar.startButton.disabled = true;

          this.controller.turnEngine(car.id, 'started').then((movCar) => {
            const duration = Math.round((movCar.distance / movCar.velocity / 1000) * 100) / 100;
            request = this.controller.animationHandler(duration, newCar.carEl)
            this.controller.turnEngineToDrive(movCar.id, 'drive').then(() => {
              console.log('my engine is okay');
            }).catch(() => {
              console.log('my engine is broken but i literally do not care');
            })
          })
        })

        newCar.stopButton.addEventListener('click', () => {
          newCar.startButton.disabled = false;
          newCar.stopButton.disabled = true;

          this.controller.turnEngine(car.id, 'stopped').then((movCar) => {
            const duration = Math.round((movCar.distance / movCar.velocity / 1000) * 100) / 100;
            this.controller.animationHandler(duration, newCar.carEl, request)
          })
        })
        newCar.stopButton.disabled = true;
        newCar.carEl.id = String(car.id);
        this.carComponentWrapper.appendChild(newCar.giveCar())
      })
    })
  }

  updateCar = () => {
    const color = this.carUpdateInputColor.value;
    const name = this.carUpdateInputText.value
    this.controller.updateCar(color, name).then(() => {
      this.displayCars()
      this.carUpdateButton.disabled = true;
    })
  }

  //pagination
  updatePagination = (cars: GetCarsResponse) => {
    const paginationLimit = 7;
    const pageCount = Math.ceil(cars.length / paginationLimit); //44 / 7 = 9
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

  setCurrentPage(page: number) {
    this.controller.setCurrentPage(page)
  }
  getCurrentPage() {
    return this.controller.getCurrentPage()
  }

  //winners methods
  getWinners = () => {
    this.controller.getWinners().then((winners) => {
      console.log(winners);
      this.winnersCounterNumber.textContent = winners.length.toString()
      //for debug
      let place = 0
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
            placeDiv.textContent = place.toString() //debug

            this.winnersPlace.appendChild(placeDiv)
            this.winnersColor.appendChild(colorDiv)
            this.winnersName.appendChild(nameDiv)
            this.winnersWins.appendChild(winDiv)
            this.winnersTime.appendChild(timeDiv)

          }).catch(() => {
            console.log('car was deleted')
          })
        })
      } else {
        return
      }

    })
  }


  //basic view methods
  addGarageElements() {
    this.root.appendChild(this.pageButtonsWrapper)
    this.root.appendChild(this.garageSection)
  }

  addWinnersElements() {
    this.root.appendChild(this.winnersSection)
    this.winnersSection.classList.add('hidden')
  }

  changeView() {
    this.garageSection.classList.toggle('hidden')
    this.winnersSection.classList.toggle('hidden')
  }

  //race

  async handleRacing(raceMode: string) {
    this.controller.getCars().then((cars) => {
      const paginatedCars = this.updatePagination(cars)
      const carsTimeArray: MovingCar[] = [];
      let winner: MovingCar;
      paginatedCars.forEach((car) => {
        let request: number;
        const theCar = document.getElementById(String(car.id)) as unknown as SVGSVGElement;
        if (raceMode === 'race') {

          this.startRace.disabled = true;
          this.resetButton.disabled = false;
          this.controller.turnEngine(car.id, 'started').then((movCar) => {

            const duration = Math.round((movCar.distance / movCar.velocity / 1000) * 100) / 100;
            carsTimeArray.push(movCar)
            request = this.controller.animationHandler(duration, theCar)

            this.controller.turnEngineToDrive(movCar.id, 'drive').then(() => {
              console.log('my engine is okay');
            }).catch(() => {
              console.log('my engine is broken but i literally do not care');
            })
          }).then(() => {
            winner = this.controller.figureOutTheWinner(carsTimeArray)
          })
        } else if (raceMode === 'reset') {
          this.startRace.disabled = false;
          this.resetButton.disabled = true;
          this.controller.turnEngine(car.id, 'stopped').then((movCar) => {
            const duration = Math.round((movCar.distance / movCar.velocity / 1000) * 100) / 100;
            request = this.controller.animationHandler(duration, theCar, request)
          })
        }
      })
      setTimeout(() => {
        const winnerDuration = Math.round((winner.distance / winner.velocity / 1000) * 100) / 100;
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

      }, 1000);

    })
  }


}