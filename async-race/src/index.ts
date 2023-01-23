import './main.scss';
import './fonts/fonts.scss'
import {GarageView} from './modules/garage/garageView'
const garageView = new GarageView(document.body);

garageView.addGarageElements()
garageView.addWinnersElements()
garageView.updateNumberofCars()
garageView.displayCars()
garageView.getCurrentPage()
garageView.getWinners()
