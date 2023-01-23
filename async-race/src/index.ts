import './main.scss';
import './fonts/fonts.scss'
import { GarageView } from './modules/garage/garageView'
const garageView = new GarageView(document.body);

alert(`Привет! Я немного не успел доделать - осталось допилить функционал гонок и таблицы победителей. Из-за основной работы совсем не хватает времени, поэтому проверь, пожалуйста, в последний день кроссчека. Спасибо!`)

garageView.addGarageElements()
garageView.addWinnersElements()
garageView.updateNumberofCars()
garageView.displayCars()
garageView.getCurrentPage()
garageView.getWinners()
