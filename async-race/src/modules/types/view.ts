import {Controller} from './controller'

export interface View {
  start: () => void;
  controller: Controller;
}