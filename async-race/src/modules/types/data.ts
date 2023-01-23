export type GetCarsResponse = [
  {
    name: string,
    color: string,
    id: number
  }
]

export type GetWinnersResponse = [
  {
    id: number,
    wins: number,
    time: number
  }
]

export type GetTurnEngineResponse = {
  velocity: number,
  distance: number
}

export type SuccessfulDrive = {
  success: string
}

export type MovingCar = GetTurnEngineResponse & {
  id: number,
}

export type Car = {
  name: string,
  color: string,
  id: number
}
export type WinnerCar = Car & {
  wins: number,
  time: number
}