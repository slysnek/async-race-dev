import {Controller} from './controller'

export interface View {
  addGarageElements: () => void;
  addWinnersElements: () => void;
  controller: Controller;
}