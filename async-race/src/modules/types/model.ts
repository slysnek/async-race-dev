import { EngineMethods } from '../jsonMethods/engineMethods';
import { GarageMethods } from '../jsonMethods/garageMethods';
import { WinnersMethods } from '../jsonMethods/winnersMethods';

export interface Model {
  engineAPI: EngineMethods
  garageAPI: GarageMethods
  winnersAPI: WinnersMethods
}
